const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  numofbooks: { type: Number, required: true },
  genre: { type: String, required: true }
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;