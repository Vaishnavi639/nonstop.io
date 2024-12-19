const Author = require('../models/author');

class authorRepository {
  async getAll() {
    return await Author.find();
  }

  async create(authorData) {
    const author = new Author(authorData);
    return await author.save();
  }

  async getById(id) {
    return await Author.findById(id);
  }

  async updateById(id, updateData) {
    return await Author.findByIdAndUpdate(id, updateData, { new: true });
  }

  async deleteById(id) {
    return await Author.findByIdAndDelete(id);
  }
}

module.exports = new authorRepository();
