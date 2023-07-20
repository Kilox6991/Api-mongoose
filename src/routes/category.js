const express = require('express');
const Category = require('../models/category.js');

const categoryController = require('../controllers/categorys');
const { route } = require('./user.js');

const router = express.Router()
//Crear nueva categoria
router.post('/Tienda', categoryController.createCategory);
//Actualizar nuevo producto
router.put('/Tienda/:idCategory', categoryController.updateCategory);
//Borrar category
router.delete('/Tienda/:idCategory', categoryController.deleteCategory)

module.exports = router;
