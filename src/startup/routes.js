require('express-async-errors')

const express = require('express')

const errors = require('../middlewares/errors.js')
const userRoutes = require('../routes/user.js')
const productRoutes = require('../routes/product.js')
const categoryRoutes = require('../routes/category.js')

module.exports = function (app) {
	app.use(express.json())

	//ENDPOINTS
	app.use('/api/users', userRoutes) //Signup y Login

	app.use('/api/products', productRoutes) //Crear, actualizar y borrar productos

	app.use('/api/categories', categoryRoutes) //Agregar, actualizar y borrar Categorias

	app.use(errors)
}
