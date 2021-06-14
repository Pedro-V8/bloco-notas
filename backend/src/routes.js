const express = require('express')
const NotesContrller = require('./controller/NotesContrller')
const routes = express.Router()


routes.get('/notes' , NotesContrller.index)
routes.post('/create' , NotesContrller.create)
routes.put('/update/:id' , NotesContrller.update)
routes.delete('/delete/:id' , NotesContrller.delete)


module.exports = routes