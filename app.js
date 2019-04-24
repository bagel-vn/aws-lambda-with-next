'use strict'

const dev = process.env.NODE_ENV !== 'production'
const express = require("express")
const next = require('next')

const server = express()
const app = next({ dev })
const handle = app.getRequestHandler()

server.get('*', (req, res) => handle(req, res))

module.exports = server
