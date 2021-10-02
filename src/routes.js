const express = require('express')
const UserController = require('./controllers/UserController')

const routes = express.Router()

routes.get('/', (req, res) => {
    return res.send('Home')
})

routes.post('/user', UserController.create)

routes.get('/teste', (req, res) => {
    return res.send('teste')
})

module.exports = routes