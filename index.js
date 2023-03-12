const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()

app.use(cors())
app.use(express.json())

app.get('/', (_, res) => {
	res.send('Up and running...')
})

app.post('/new-user', (req, res) => {
	console.log(req.body)
})

app.listen(process.env.PORT || 5000, () => console.log(`Running on port ${process.env.PORT || 5000}`))
