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
}