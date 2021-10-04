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


}