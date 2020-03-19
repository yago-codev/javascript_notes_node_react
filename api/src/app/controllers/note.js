const Note = require('../models/note');
const { isOwner } = require('../utils');

module.exports = {
  create: async(req, res) => {
    const { title, body } = req.body;

    
    try {
      let note = new Note({ title, body, author: req.user._id });

      await note.save();
      
      res.status(200).json(note);
    }
    catch (err) {
      res.status(500).json({ error: 'Problem to create a new note!' });
    }
  },
  read: async(req, res) => {
    try {
      const { id } = req.params;

      let note = await Note.findById(id);

      if ( isOwner(req.user, note) ) {
        res.json(note);
      } else {
        res.status(403).json({ error: 'Permission denied!' });
      }
    }
    catch (error) {
      res.status(500).json({ error: 'Problem to get a note!' });
    }
  },
  readAll: async(req, res) => {
    try {
      let notes = await Note.find({ author: req.user._id });

      res.json(notes);
    }
    catch (error) {
      res.status(500).json({ error: error });
    }
  },
  edit: async(req, res) => {
    const { title, body } = req.body;
    const { id } = req.params;
    
    try {
      let note = await Note.findById(id);

      if ( isOwner(req.user, note) ) {
        let note = await Note.findOneAndUpdate(id, 
          { $set: { title, body } }, // campos que serão atualizados de acordo com os dados vindos do req.body
          { upsert: true, 'new': true } // config para retornar a nota atualizada
        );

        res.json(note);
      } else {
        res.status(403).json({ error: 'Permission denied!' });
      }
    }
    catch (error) {
      res.status(500).json({ error: 'Problem to update a note!' });
    }
  },
  delete: async(req, res) => {
    const { id } = req.params; // pegando o id da url
    try {
      let note = await Note.findById(id);

      if ( isOwner(req.user, note) ) {
        await note.delete();
        res.status(204).json({ message: 'Your note has been deleted with success!' });
      } else {
        res.status(403).json({ error: 'Permission denied!' });
      }
    }
    catch (error) {
      res.status(500).json({ error: 'Problem to delete a note!' });
    }
  },
}