const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send({message:'Olá Mundo!!'})

}) 
app.get('/mensagem1', (req, res) => {
  res.send({message:'Mensagem 1'})
})
app.get('/mensagem2', (req, res) => {
  res.send({message:'Mensagem 2'})
})
app.get('/mensagem3', (req, res) => {
  res.send({message:'Mensagem 3'})
})
app.get('/mensagem4', (req, res) => {
  res.send({message:'Mensagem 4'})
})
app.get('/mensagem5', (req, res) => {
  res.send({message:'Mensagem 5'})
})

module.exports = app;