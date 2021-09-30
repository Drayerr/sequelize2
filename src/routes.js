const express = require('express')

const routes = express.Router()

routes.get('/', (req, res) => {
    return res.send('Home')
})

routes.get('/teste', (req, res) => {
    return res.send('teste')
})

module.exports = routes