const express = require('express');
const Product = require('../models/product.js');

const productController = require('../controllers/products');
const isAuth = require('../middlewares/isAuth');
const isAdmin = require('../middlewares/isAdmin');
const { route } = require('./user.js');

const router = express.Router()
//Crear nuevo producto
router.post('/Tienda',isAuth ,isAdmin , productController.createProduct);
//Actualizar nuevo producto
router.put('/Tienda/:idProducto',isAuth,isAdmin, productController.updateProduct);
//Borrar producto
router.delete('/Tienda/:idProducto',isAuth,isAdmin, productController.deleteProduct)
//Ver todos los productos
router.get('/Tienda', productController.allProducts)
//Ver un producto
router.get('/Tienda/:idProducto', productController.oneProduct)
//Votar Producto
router.post('/Tienda/vote', productController.voteProduct);

module.exports = router;

