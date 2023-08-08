const Category = require('../models/category')

const getAllCategories = async (req, res) => {
	const categories = await Category.find()

	res.json(categories)
}

//Crear un nuevo producto
const createCategory = async (req, res) => {
	const { name } = req.body

	const newCategory = new Category({ name })
	const savedCategory = await newCategory.save()
	res.json(savedCategory)
}

//Actualizar un Categoryo
const updateCategory = async (req, res) => {
	const idCategory = req.params.idCategory
	const updateFields = req.body

	// Actualizar
	const updatedCategory = await Category.findByIdAndUpdate(idCategory, {
		$set: updateFields,
	})
	if (!updatedCategory) {
		return res.status(404).send('La categoria no existe')
	}

	res.json(updatedCategory)
}

//Borrar categoria
const deleteCategory = async (req, res) => {
	const idCategory = req.params.idCategory

	// Busca la categoria por su ID
	const category = await Category.findById(idCategory)

	if (!category) {
		return res.status(404).send('Categoria no encontrada')
	}

	// Elimina la categoria de la base de datos
	category.deleteOne()

	res.send('Categoria eliminada exitosamente')
}

module.exports = {
	getAllCategories,
	updateCategory,
	createCategory,
	deleteCategory,
}
