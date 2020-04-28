require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

app.get('/', (req,res) => res.json({hello: 'hello word'}))

app.listen(port, console.log(`Server running on port ${port}`))