const express = require('express')
const Category = require('../models/category.js')

const categoryController = require('../controllers/categorys')
const isAuth = require('../middlewares/isAuth')
const isAdmin = require('../middlewares/isAdmin')

const validate = require('../middlewares/validate')
const validateParamId = require('../middlewares/validateParamId')

const router = express.Router()

router.get('/', categoryController.getAllCategories)

router.post('/', categoryController.createCategory)

router.put(
	'/:idCategory',
	validateParamId('idCategory'),
	validate,
	categoryController.updateCategory
)

router.delete(
	'/:idCategory',
	validateParamId('idCategory'),
	validate,
	categoryController.deleteCategory
)

module.exports = router
