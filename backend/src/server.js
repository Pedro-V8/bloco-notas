const express = require('express');
const app = express()
const routes = require('./routes');
const cors = require('cors')
const bodyParser = require('body-parser')


app.use(cors())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(express.json())
app.use(routes);

app.use((req , res , next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})
app.use((error , req , res , next) => {
    res.status(error.status || 500)
    res.json({ error: error.message})
})



app.listen(3333 , () => {
    console.log('Servidor rodando');
});