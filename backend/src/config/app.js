const app = require('express')()
const cors = require('cors')
const bodyParser = require('body-parser')

const db = require('../database/connection')
const routes = require('./routes')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.db = db

routes(app)

module.exports = app
