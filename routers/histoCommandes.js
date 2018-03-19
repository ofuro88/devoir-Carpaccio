const express = require('express')
const commandesRouter = express.Router()
const bodyParser = require('body-parser')
const path = require('path')
const tools = require('../tools/toolsCommandes')

var commandes = tools.GetCommandes()

commandesRouter.use(bodyParser.urlencoded({extended: true}))
commandesRouter.use(bodyParser.json())


// middlewares


// lectures
commandesRouter.get('/', (req, res) => res.sendFile(path.join(__dirname , 'histoCommandes.html')))
    // retour à l'accueil
commandesRouter.get('../', (req,res) => res.redirect('localhost:3000/'))


// création


// modification


// suppression


// export
module.exports = commandesRouter