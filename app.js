const express = require('express')
const mongoose = require('mongoose');
const User = require('./src/models/user.js');

const userRoutes = require('./src/routes/user.js');
const productRoutes = require ('./src/routes/product.js')
const categoryRoutes = require ('./src/routes/category.js')


const app = express()
app.use(express.json());

// //Conexion Base de datos
mongoose.connect('mongodb://127.0.0.1:27017/tienda')
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((error) => {
    console.error('Error en la conexión a la base de datos:', error);
  });

//ENDPOINTS
app.use('/tienda', userRoutes);//Signup 

app.use('/tienda', userRoutes);//Login

app.use('/tienda', productRoutes)//Crear producto

app.use('/tienda', productRoutes)//Actualizar producto

app.use('/tienda', productRoutes)//Borrar producto

app.use('/tienda/category', categoryRoutes)//Agregar, actualizar y borrar Categorias





app.get('/Tienda/Productos', (req, res) => {
  // Logica para obtener todos los productos
  res.send('Endpoint GET para obtener todos los productos');
});

app.get('/Tienda/Producto/:idProducto', (req, res) => {
  // Logica para obtener un producto por su ID
  const idProducto = req.params.idProducto;
  res.send(`Endpoint GET para obtener el producto con ID ${idProducto}`);
});


app.delete('/Tienda/:idProducto', (req, res) => {
  // Lógica para eliminar un producto por su ID
  const idProducto = req.params.idProducto;
  res.send(`Endpoint DELETE para eliminar el producto con ID ${idProducto}`);
});



const PORT = 3000;

app.listen(PORT, () => console.log(`Server ON ${PORT}`));