const Note = require('../models/note');

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
  }
}