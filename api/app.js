// Carregando módulos
const express = require("express")
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const admin = require("../router/admin")
const path = require("path")
// const mongoose = require("mongoose")

// Configurações
// Body Parser
app.use(express.urlencoded({extended: true}))
app.use(express.json())
//Handlebars
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine','handlebars')
// Mongoose
// app.use(express.static(path.join(__dirname,"public")))
// Rotas
app.use('/admin',admin)
// Outros
const PORT = 8081
app.listen(PORT,()=> {
  console.log("servidor rodando")
})