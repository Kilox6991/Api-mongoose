const Product = require('../models/product')

//Crear un nuevo producto
const createProduct = async (req, res) => {
    const {
        nameProduct,
        description,
        score,
        price,
        image,
        categoryId
    } = req.body;
    try {
        const newProduct = new Product({
            nameProduct,
            description,
            score,
            price,
            image,
            categoryId,
        });
        const savedProduct = await newProduct.save();
        res.json(savedProduct);
    } catch (error) {
        res.status(500).send('Error al crear el producto');
    }
};


//Actualizar un producto
const updateProduct = async (req, res) => {
    const idProducto = req.params.idProducto;
    const updateFields = req.body;
    try {
        // Actualizar 
        const updatedProduct = await Product.findByIdAndUpdate(idProducto,{$set: updateFields});
        if (!updatedProduct) {
            return res.status(404).send('El producto no existe');
        }
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).send('Error al actualizar el producto');
    }
};

module.exports = {
    updateProduct,
    createProduct,
};