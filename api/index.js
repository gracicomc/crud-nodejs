//initial config
const express = require('express')
const app = express()
const mongoose = require('mongoose')

//read JSON / middlewares
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

//initial route/endpoint
app.get('/', (req, res) => {
    //show req
    res.json({ message: 'hi, express!' })
})

//HflPCYiScnSTdxEg

//mongodb+srv://graci:HflPCYiScnSTdxEg@apicluster.tjcqz.mongodb.net/bancoAPI?retryWrites=true&w=majority

//port
const DB_USER = 'graci'
const DB_PASSWORD = 'HflPCYiScnSTdxEg'
mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.tjcqz.mongodb.net/bancoAPI?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log('Connected to MongoDB!')
        app.listen(3000)
    })
    .catch((err) => console.log(err))
