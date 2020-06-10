const dotenv = require('dotenv').config()
const app = require('./config/app')
const server = require('./config/server')

server(app)
