const express = require('express');
const {upload} = require('../models/product');

const productController = require('../controllers/products');
const isAuth = require('../middlewares/isAuth');
const isAdmin = require('../middlewares/isAdmin');

const {productSchemaValidation} = require('../models/product')
const validate = require('../middlewares/validate')
const validateParamId = require('../middlewares/validateParamId')


const router = express.Router() 
//Crear nuevo producto
router.post('/Tienda',isAuth,upload.single('imgProduct'), productSchemaValidation, validate,productController.createProduct);
//Actualizar nuevo producto
router.put('/Tienda/:idProducto',isAuth,isAdmin, productController.updateProduct);
//Borrar producto
router.delete('/Tienda/:idProducto',isAuth, validateParamId("idProducto"), validate, productController.deleteProduct)
//Ver todos los productos
router.get('/Tienda', productController.allProducts)
//Ver un producto
router.get('/Tienda/:idProducto', productController.oneProduct)
//Votar Producto
router.post('/Tienda/vote',isAuth, productController.voteProduct);

module.exports = router;

