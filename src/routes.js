const express = require('express')
const UserController = require('./controllers/UserController')
const routes = express.Router()

routes.get('/', (req, res) => {
    return res.send('Home')
})

routes.get('/teste', (req, res) => {
    return res.send('teste')
})

routes.post('/user', UserController.create)

module.exports = routes