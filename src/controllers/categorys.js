const Category = require('../models/category')

//Crear un nuevo producto
const createCategory = async (req, res) => {
    const {nameCategory} = req.body;
    try {
        const newCategory = new Category({
            nameCategory,
        });
        const savedCategory = await newCategory.save();
        res.json(savedCategory);
    } catch (error) {
        res.status(500).send('Error al crear el Category');
    }
};


//Actualizar un Categoryo
const updateCategory = async (req, res) => {
    const idCategory = req.params.idCategory;
    const updateFields = req.body;
    try {
        // Actualizar 
        const updatedCategory = await Category.findByIdAndUpdate(idCategory,{$set: updateFields});
        if (!updatedCategory) {
            return res.status(404).send('La categoria no existe');
        }
        res.json(updatedCategory);
    } catch (error) {
        res.status(500).send('Error al actualizar la categoria');
    }
};

//Borrar categoria
const deleteCategory = async(req, res) => {
    const idCategory = req.params.idCategory;
    try {
        // Busca la categoria por su ID
        const category = await Category.findById(idCategory);
        
        if (!category) {
          return res.status(404).send('Categoria no encontrada');
        }
    
        // Elimina la categoria de la base de datos
        category.deleteOne();
    
        res.send('Categoria eliminada exitosamente');
      } catch (error) {
        res.status(500).send('Error al eliminar la categoria');
      }
};

module.exports = {
    updateCategory,
    createCategory,
    deleteCategory,
};