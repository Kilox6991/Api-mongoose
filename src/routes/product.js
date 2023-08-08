const express = require('express')
const { upload } = require('../models/product')

const productController = require('../controllers/products')
const isAuth = require('../middlewares/isAuth')
const isAdmin = require('../middlewares/isAdmin')

const { productSchemaValidation } = require('../models/product')
const validate = require('../middlewares/validate')
const validateParamId = require('../middlewares/validateParamId')

const router = express.Router()

router.get('/', productController.allProducts)
router.get('/:idProducto', productController.oneProduct)

router.post(
	'/',
	isAuth,
	upload.single('imgProduct'),
	productSchemaValidation,
	validate,
	productController.createProduct
)

router.put(
	'/:idProducto',
	isAuth,
	upload.single('imgProduct'),
	validateParamId('idProducto'),
	productSchemaValidation,
	validate,
	productController.updateProduct
)

router.delete(
	'/:idProducto',
	isAuth,
	isAdmin,
	validateParamId('idProducto'),
	validate,
	productController.deleteProduct
)

router.post('/vote', isAuth, productController.voteProduct)

module.exports = router
