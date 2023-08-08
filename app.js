require('dotenv').config()
const express = require('express')

const app = express()

require('./src/startup/db')()
require('./src/startup/routes')(app)

const PORT = 3000

app.listen(PORT, () => console.log(`Server ON ${PORT}`))
