const express = require('express')
const validerRouter = express.Router()
const bodyParser = require('body-parser')
const path = require('path')

validerRouter.use(bodyParser.urlencoded({extended: true}))
validerRouter.use(bodyParser.json())

// lectures
validerRouter.post('/', (req, res) => res.sendFile(path.join(__dirname , 'valider.html')))
    // retour à l'accueil
validerRouter.get('../', (req,res) => res.redirect('localhost:3000/'))


// export
module.exports = validerRouter