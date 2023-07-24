const multer = require('multer')
const path = require('path')

module.exports = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/')
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)

		cb(
			null,
			file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)
		)
	},
})