const express = require('express')
const cors = require('cors')
const AppErrors = require('./errors/AppErrors')

const sequelize = require('./config/database')
const routes = require('./routes')

sequelize.sync({ force: true }).then(() => console.log('Database is ready'))

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.use((error, req, res, next) => {
  if (error instanceof AppErrors) {
    return res.status(error.code).json({error : error.msg})
  }
    return res.status(500).json({ error: 'Internal server error.'})
})

app.listen(3333, () => console.log('Online at 3333'))