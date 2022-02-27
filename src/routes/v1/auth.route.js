const express = require('express');
const { authController } = require('../../controllers');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate.middleware');
const { register, login, logout } = require('../../validations/user.validation');

const router = express.Router();

router.post('/login', validate(login),authController.login);
router.post('/register', validate(register), authController.register);
router.post('/logout', validate(logout), authController.logout);

module.exports = router
