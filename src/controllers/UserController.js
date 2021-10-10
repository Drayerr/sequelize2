const User = require('../models/User')
const Op = require('sequelize').Op
const AppErrors = require('../errors/AppErrors')

module.exports = {
    async create(req, res) {
        const { username, cpf } = req.body

        const alreadyExists = await User.findOne({ where: { [Op.or]: [{ username }, { cpf }] } })

        if (alreadyExists) {
            throw new AppErrors('User already exists', 401)
        }

        await User.create(req.body)
        return res.json({ msg: 'New user created!' })
    },

    async show(req, res) {
        const users = await User.findAll(
            ({
                attributes : {
                    exclude: ['password']
                }
            })
        )

        return res.json(users)
    },

    async listOne(req, res) {
        const { id } = req.params
        const user = User.findOne({ where: { id: id } })

        return res.json(user)
    },

    async deleteUser(req, res) {
        const { id } = req.params
        await User.destroy({ where: { id: id}})

        return res.json({ msg: 'Deleted'})
    },

    async updateUser(req, res) {
        const { id } = req.params
        const user = await User.findOne({ where: { id: id }})

        await user.update(req.body)
        res.json({ msg: 'User updated!'})
    }
}