const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
	nameProduct: { type: String, required: true },
    description :{ type: String, required: true},
    imgProduct : {type:String},
    score: {type: Array},
    scoreArray: [{ type: Number, min: 0, max: 5 }],
    price: {type: Number, require:true}, 
    scoreArray: [{type: Number, min: 0, max:5},],
    IdCategoria: {type: mongoose.Schema.Types.ObjectId, ref:'Category'},
    createdAt: {type:Date, default:Date.now}
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
