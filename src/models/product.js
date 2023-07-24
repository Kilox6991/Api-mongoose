const mongoose = require('mongoose')

const {body} = require('express-validator')
const createUploader = require('../utils/multer')

const productSchema = new mongoose.Schema({
	  nameProduct: { type: String, required: true },
    description :{ type: String, required: true},
    imgProduct : { type: String, required: true},
    cloudinaryId: { type: String, required: true},
    score: {type:Number, min: 0, max: 5 },
    scoreId: {type: Array}, //Id de los que han votado ya
    oneVote:{type:Number},
    totalVote: {type: Number},
    scoreArray: [{ type: Number, min: 0, max: 5 }],
    price: {type: Number, require:true},
    IdCategoria: {type: mongoose.Schema.Types.ObjectId, ref:'Category'},
}, {
  timestamps: true 
})

const Product = mongoose.model('Product', productSchema)


//MULTER
const IMAGE_TYPES = {
  'image/png':'png',
  'image/jpg':'jpg',
}

const validateImage = (type) => IMAGE_TYPES[type]


const productSchemaValidation =[
    body('nameProduct')
      .notEmpty()
      .withMessage('El nombre el producto es obligatorio'),
    body('description')
      .notEmpty()
      .withMessage('La descripción es obligatoria'),
    body('price')
      .notEmpty()
      .withMessage('El precio es obligatorio')
      .isNumeric()
      .withMessage('El precio debe un numero'),
    body('IdCategoria')
      .isMongoId()
      .withMessage('ObjectId invalida'),
    body('imgProduct')
      .custom((value, {req}) => req.file)
      .withMessage('la imagen es obligatoria')
      .custom((value, {req}) => validateImage(req.file.mimetype))
      .withMessage('Debe incluir una imagen en los formatos permitidos: ' + Object.values(IMAGE_TYPES).join('/'))
]




exports.Product = Product
exports.upload = createUploader(validateImage)
exports.productSchemaValidation = productSchemaValidation



