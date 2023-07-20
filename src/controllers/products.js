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

//Borrar producto
const deleteProduct = async(req, res) => {
    const idProducto = req.params.idProducto;
    try {
        // Busca el producto por su ID
        const product = await Product.findById(idProducto);
        console.log(product)
        if (!product) {
          return res.status(404).send('Producto no encontrado');
        }
    
        // Elimina el producto de la base de datos
        product.deleteOne();
    
        res.send('Producto eliminado exitosamente');
      } catch (error) {
        res.status(500).send('Error al eliminar el producto');
      }
};

module.exports = {
    updateProduct,
    createProduct,
    deleteProduct,
};