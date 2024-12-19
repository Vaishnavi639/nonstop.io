const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController'); // Ensure the path is correct

// CRUD routes
router.get('/', authorController.getAllAuthors);
router.post('/', authorController.createAuthor); // This is where the error points
router.get('/:id', authorController.getAuthorById);
router.put('/:id', authorController.updateAuthor);
router.delete('/:id', authorController.deleteAuthor);

module.exports = router;