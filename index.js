const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.send('Up and running...')
})

app.listen(process.env.PORT || 5000, () => console.log(`Running on port ${process.env.PORT || 5000}`))
