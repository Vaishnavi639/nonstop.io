const authorRepository = require('../repository/authorRepository');

// Get all authors
exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await authorRepository.getAll();
    res.json(authors);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch authors', error });
  }
};

// Create a new author
exports.createAuthor = async (req, res) => {
  const { name, numofbooks, genre } = req.body;
  try {
    const newAuthor = await authorRepository.create({ name, numofbooks, genre });
    res.status(201).json(newAuthor);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create author', error });
  }
};

// Get an author by ID
exports.getAuthorById = async (req, res) => {
  try {
    const author = await authorRepository.getById(req.params.id);
    if (!author) return res.status(404).json({ message: 'Author not found' });
    res.json(author);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch author', error });
  }
};

// Update an author by ID
exports.updateAuthor = async (req, res) => {
  try {
    const updatedAuthor = await authorRepository.updateById(req.params.id, req.body);
    if (!updatedAuthor) return res.status(404).json({ message: 'Author not found' });
    res.json(updatedAuthor);
  } catch (error) {
    res.status(400).json({ message: 'Failed to update author', error });
  }
};

// Delete an author by ID
exports.deleteAuthor = async (req, res) => {
  try {
    const deletedAuthor = await authorRepository.deleteById(req.params.id);
    if (!deletedAuthor) return res.status(404).json({ message: 'Author not found' });
    res.json({ message: 'Author deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete author', error });
  }
};
