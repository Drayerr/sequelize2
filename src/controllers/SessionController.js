const User = require('../models/User')
const AppErrors = require('../errors/AppErrors')
const jwt = require('jsonwebtoken')
const SECRET = '5c57d14448e81846483f4836622eee89'

module.exports = {
    async CreateSession(req, res) {
        const { cpf, password } = req.body
        const user = await User.findOne({ where: { cpf, password } })

        if (!user) {
            throw new AppErrors('Invalid user', 404)
        }
        
        const token = jwt.sign({ userId: user.id }, SECRET)
        return res.status(200).json({ auth: true, token })
    }
}