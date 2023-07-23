const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
	nameProduct: { type: String, required: true },
    description :{ type: String, required: true},
    imgProduct : {type:String},
    score: {type:Number, min: 0, max: 5 },
    scoreId: {type: Array}, //Id de los que han votado ya
    oneVote:{type:Number},
    totalVote: {type: Number},
    scoreArray: [{ type: Number, min: 0, max: 5 }],
    price: {type: Number, require:true},
    IdCategoria: {type: mongoose.Schema.Types.ObjectId, ref:'Category'},
    createdAt: {type:Date, default:Date.now}
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
