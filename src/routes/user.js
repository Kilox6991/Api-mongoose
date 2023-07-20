const express = require('express');

const User = require('../models/user.js');
const UserControllers = require('../controllers/users')

const router = express.Router()
// Ruta para el registro de usuarios
router.post('/signup', UserControllers.register);

// Ruta para el inicio de sesión
router.post('/login', UserControllers.login);

module.exports = router


