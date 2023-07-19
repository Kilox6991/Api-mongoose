const mongoose = require('mongoose')
// const jwt = require('jsonwebtoken')
// const config = require('config')
// const { pick } = require('lodash')

const userSchema = new mongoose.Schema({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	isAdmin: Boolean,
	email:{type: String, required: true, unique: true}
})

userSchema.methods.generateJWT = function () {
	return jwt.sign(pick(this, ['username', 'isAdmin']), config.get('jwtSecret'))
}

const User = mongoose.model('User', userSchema)

module.exports = User
