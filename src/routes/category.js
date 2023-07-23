const express = require('express');
const Category = require('../models/category.js');

const categoryController = require('../controllers/categorys');
const isAuth = require('../middlewares/isAuth');
const isAdmin = require('../middlewares/isAdmin');
const { route } = require('./user.js');

const router = express.Router()
//Crear nueva categoria
router.post('/Tienda',isAuth ,isAdmin, categoryController.createCategory);
//Actualizar nuevo producto
router.put('/Tienda/:idCategory',isAuth ,isAdmin, categoryController.updateCategory);
//Borrar category
router.delete('/Tienda/:idCategory',isAuth ,isAdmin, categoryController.deleteCategory)

module.exports = router;
