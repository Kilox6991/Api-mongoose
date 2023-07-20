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
app.use('/tienda', userRoutes);//Signup y Login

app.use('/tienda', productRoutes)//Crear, actualizar y borrar productos

app.use('/tienda/category', categoryRoutes)//Agregar, actualizar y borrar Categorias

const PORT = 3000;

app.listen(PORT, () => console.log(`Server ON ${PORT}`));