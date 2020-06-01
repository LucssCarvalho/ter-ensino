const server = require('express')()
const cors = require('cors')
const bodyParser = require('body-parser')

server.use(cors())

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

module.exports = server
