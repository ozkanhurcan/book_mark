const express = require('express');
const { bookController } = require('../../controllers');
const validate = require('../../middlewares/validate.middleware');
const { getBooks } = require('../../validations/book.validation');

const router = express.Router();

router.get('/',validate(getBooks),bookController.getBooks);
router.get('/:bookId', bookController.getBookById);

module.exports = router
