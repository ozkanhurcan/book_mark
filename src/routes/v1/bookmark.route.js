const express = require('express');
const { bookmarkController } = require('../../controllers');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate.middleware');
const { register, login, logout } = require('../../validations/user.validation');

const router = express.Router();

router.get('/', auth(),bookmarkController.getBookmarks);
router.post('/:bookId', auth(), bookmarkController.addBookmark);
router.delete('/:bookId', auth(), bookmarkController.delBookMark);

module.exports = router
