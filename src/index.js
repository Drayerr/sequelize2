const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    return res.json({msg: 'nothing'})
})

app.listen(3333)