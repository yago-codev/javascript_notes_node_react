const mongoose = require('mongoose');

let noteSchema = new mongoose.Schema({
  title: String,
  body: String,
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  // relacionamento:
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

// definindo quais campos das notas serão filtrados e vinculando esses campos ao índice
noteSchema.index({ 'title': 'text', 'body': 'text' }); 

module.exports = mongoose.model('Note', noteSchema);