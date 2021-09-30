const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const User = sequelize.define('User', {
    username: { type: DataTypes.STRING },
    cpf: { type: DataTypes.INTEGER },
    age: { type: DataTypes.INTEGER },
    born_date: { type: DataTypes.DATE },
    role: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING }
},
    {
        sequelize,
        modelName: 'user'
    }
)

module.exports = User