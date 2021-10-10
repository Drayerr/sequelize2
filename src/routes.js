const express = require('express')
const UserController = require('./controllers/UserController')
const routes = express.Router()

routes.get('/', UserController.show)
routes.post('/user', UserController.create)
routes.get('/user/:id', UserController.listOne)
routes.post('/user', UserController.create)
routes.put('/users/:id', UserController.updateUser)
routes.delete('/user/:id', UserController.deleteUser)

module.exports = routes