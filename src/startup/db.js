const mongoose = require('mongoose')

module.exports = function () {
	// //Conexion Base de datos
	mongoose
		.connect(process.env.MONGO_URI)
		.then(() => {
			console.log('Conexión exitosa a la base de datos')
		})
		.catch((error) => {
			console.error('Error en la conexión a la base de datos:', error)
		})
}
