const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
const User = require('./User')

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URL)

app.get('/', (_, res) => {
	res.send('Up and running...')
})

app.get('/all-user', (_, res) => {
	User.find({}).then(result => res.send(result))
})

app.post('/new-user', (req, res) => {
	const user = new User(req.body)
	user.save().then(response => {
		if (response._id) {
			res.json({ success: true })
		} else {
			res.json({ success: false })
		}
	})
})

app.listen(process.env.PORT || 5000, () => console.log(`Running on port ${process.env.PORT || 5000}`))
