const express = require('express')
const app = express()
const mysql = require('mysql2')
const routes = require('./routes')
const bodyParser = require('body-parser')

const sequelize = require('./config/connection')

const PORT = 4433

app.use(express.urlencoded({extended: false}))

app.use(express.json())

app.use(routes)

sequelize.sync({force: true}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server Now Running on Port ${PORT}`)
    })
})
