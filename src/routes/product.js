const express = require('express');
const Product = require('../models/product.js');

const productController = require('../controllers/products');

const router = express.Router()
//Crear nuevo producto
router.post('/Tienda', productController.createProduct);
//Actualizar nuevo producto
router.put('/Tienda/:idProducto', productController.updateProduct);

module.exports = router;

