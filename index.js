const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use('/api' , require('./2.router/kelasRouter'))



app.listen(port , ()=> console.log('Server jalan di Port ' + port))