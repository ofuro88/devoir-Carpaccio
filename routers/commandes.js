const express = require('express')
const CommandesRouter = express.Router()
const bodyParser = require('body-parser')
const path = require('path')
const tools = require('../tools/toolsCommandes')

CommandesRouter.use(bodyParser.urlencoded({extended: true}))
CommandesRouter.use(bodyParser.json())

// lectures
CommandesRouter.get('/', (req, res) => {
    let commandes = tools.GetCommandes()
    res.render('commandes.ejs', {commandes: commandes})
})
// retour à l'accueil
CommandesRouter.get('../', (req,res) => res.redirect('localhost:3000/'))


// export
module.exports = CommandesRouter