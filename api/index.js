//initial config
const express = require('express')
const app = express()

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
    res.json({ message: 'oi, express!' })
})

//port
app.listen(3000)
