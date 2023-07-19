const express = require('express')

const app = express()

//ENDPOINTS
app.get('/Tienda/Productos', (req, res) => {
    // Logica para obtener todos los productos
    res.send('Endpoint GET para obtener todos los productos');
  });

app.get('/Tienda/Producto/:idProducto', (req, res) => {
    // Logica para obtener un producto por su ID
    const idProducto = req.params.idProducto;
    res.send(`Endpoint GET para obtener el producto con ID ${idProducto}`);
  });

app.put('/Tienda/:idProducto', (req, res) => {
    // Lógica para actualizar un producto por su ID
    const idProducto = req.params.idProducto;
    res.send(`Endpoint PUT para actualizar el producto con ID ${idProducto}`);
  });

app.post('/Tienda', (req, res) => {
    // Lógica para crear un nuevo producto
    res.send('Endpoint POST para crear un nuevo producto');
  });

app.delete('/Tienda/:idProducto', (req, res) => {
    // Lógica para eliminar un producto por su ID
    const idProducto = req.params.idProducto;
    res.send(`Endpoint DELETE para eliminar el producto con ID ${idProducto}`);
  });

app.post('/Tienda/user', (req, res) => {
    // Lógica para crear un nuevo usuario
    res.send('Endpoint POST para crear un nuevo usuario');
  });
const PORT = 3000;

app.listen(PORT, () => console.log(`Server ON ${PORT}`));
