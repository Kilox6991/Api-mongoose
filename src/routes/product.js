const express = require('express');
const Product = require('../models/product.js');

const productController = require('../controllers/products');
const { route } = require('./user.js');

const router = express.Router()
//Crear nuevo producto
router.post('/Tienda', productController.createProduct);
//Actualizar nuevo producto
router.put('/Tienda/:idProducto', productController.updateProduct);
//Borrar producto
router.delete('/Tienda/:idProducto', productController.deleteProduct)
//Ver todos los productos
router.get('/Tienda', productController.allProducts)
//Ver un producto
router.get('/Tienda/:idProducto', productController.oneProduct)
//Votar Producto
router.post('/Tienda/vote', productController.voteProduct);

module.exports = router;

