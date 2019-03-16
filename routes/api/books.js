// requiring
const router = require("express").Router();
const booksController = require("../../controllers/booksController.js");

// below taken from assignment instructions
// /api/books (get) - Should return all saved books as JSON.
// /api/books (post) - Will be used to save a new book to the database.

// routes that match "/api/books"
router.route("/")
    .get(booksController.findBooks)
    .post(booksController.save);

// /api/books/:id (delete) - Will be used to delete a book from the database by Mongo _id.
// routes that match "/api/books/:id"
router.route("/:id")
    .delete(booksController.delete);

module.exports = router;