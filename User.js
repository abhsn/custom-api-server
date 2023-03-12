const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	age: Number,
	verified: Boolean,
	email: { type: String, required: true },
	phone: String,
	website: String
})

module.exports = mongoose.model('User', userSchema)
