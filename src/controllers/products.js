const { Product } = require('../models/product')

const cloudinary = require('../utils/cloudinary')

//Crear un nuevo producto
const createProduct = async (req, res) => {
	const { path: imgProduct, filename: cloudinaryId } = req.file

	const { name, description, score, price, image, categoryId } = req.body

	const newProduct = new Product({
		name,
		description,
		imgProduct,
		cloudinaryId,
		score,
		price,
		image,
		categoryId,
	})
	const savedProduct = await newProduct.save()
	res.json(savedProduct)
}

//Actualizar un producto
const updateProduct = async (req, res) => {
	const { path: imgProduct, filename: cloudinaryId } = req.file

	const idProducto = req.params.idProducto
	const updateFields = { ...req.body, imgProduct, cloudinaryId }

	console.log(updateFields)

	// Actualizar
	const updatedProduct = await Product.findByIdAndUpdate(idProducto, {
		$set: updateFields,
	})

	if (!updatedProduct) {
		return res.status(404).send('El producto no existe')
	}

	await cloudinary.uploader.destroy(updatedProduct.cloudinaryId, {
		invalidate: true,
	})

	res.json(updatedProduct)
}

//Borrar producto
const deleteProduct = async (req, res) => {
	const idProducto = req.params.idProducto

	// Busca el producto por su ID
	const product = await Product.findById(idProducto)
	console.log(product)
	if (!product) {
		return res.status(404).send('Producto no encontrado')
	}

	// Elimina el producto de la base de datos
	await product.deleteOne()

	await cloudinary.uploader.destroy(product.cloudinaryId, {
		invalidate: true,
	})

	res.send('Producto eliminado exitosamente')
}

//Obtener todos los productos
const allProducts = async (req, res) => {
	// Obtener todos los productos desde la base de datos
	const allProducts = await Product.find()
	// Enviar los productos como respuesta
	res.json(allProducts)
}
//Obtener un producto
const oneProduct = async (req, res) => {
	const idProducto = req.params.idProducto

	//Obtener un producto por ID
	const oneProduct = await Product.findById(idProducto)
	res.json(oneProduct)
}
//Puntuar producto y almacenar usuarios que han votado el producto
const voteProduct = async (req, res) => {
	const { productId, userId, score } = req.body

	// Verificar si el usuario ya ha votado este producto
	const product = await Product.findById(productId)
	if (product.scoreId.includes(userId)) {
		return res.status(400).send('El usuario ya ha votado este producto')
	}

	// Agregar el ID del usuario al array de votantes
	product.scoreId.push(userId)

	// Actualizar la puntuación media del producto
	product.scoreArray.push(score)
	const totalScores = product.scoreArray.reduce((sum, score) => sum + score, 0)
	const averageScore = totalScores / product.scoreArray.length
	product.totalVote = averageScore

	await product.save()

	res.json(product)
}
//Filtrar por categoria, precio y pu

module.exports = {
	updateProduct,
	createProduct,
	deleteProduct,
	allProducts,
	oneProduct,
	voteProduct,
}
