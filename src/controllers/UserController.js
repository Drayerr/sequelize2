const User = require('../models/User')
const Op = require('sequelize').Op

module.exports = {
    async create(req, res) {
        const { username, cpf } = req.body

        const alreadyExists = await User.findOne({ where: { [Op.or]: [{ username }, { cpf }] } })

        if (alreadyExists) {
            console.log('Error: user already exists');
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
    }
}