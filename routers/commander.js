const express = require('express')
const commanderRouter = express.Router()
const bodyParser = require('body-parser')
const path = require('path')
const toolsProd = require('../tools/toolsProduits')

var produits = toolsProd.GetProduits()

commanderRouter.use(bodyParser.urlencoded({extended: true}))
commanderRouter.use(bodyParser.json())

// middlewares
// données trouvées
function findProduitAndPutInRequest(req, res, next) {
    const ProduitIndex = produits.findIndex(
        p => p.id === parseInt(req.params.produitId))
    if (ProduitIndex !== -1) {
        req.produit = produits[ProduitIndex]
        req.ProduitIndex = ProduitIndex
    }
    next()
}

// données non trouvées
function interruptIfNotFound(req, res, next) {
    if (req.produit) {
        next()
    } else {
        res.status(404).json({ error: 'product not found' })
    }
}

// vérifications des données
function validateCommandeData(req, res, next) {
    // console.log(req.body)
    if(req.body && req.body.client && req.body.saison && req.body.produit && req.body.quantite && req.body.date){
        req.commandeData = req.body
        next()
    }
    else {
        res.status(400).json({ error: 'Invalid purchase data' })
    }
}

// lectures
commanderRouter.get('/', (req, res) => res.render('commander.ejs'))
commanderRouter.get('../', (req,res) => res.redirect('localhost:3000/'))

// création
commanderRouter.post('/', validateCommandeData, (req, res) => {
    tools.AddCommande(req.commandeData)
    res.sendFile(path.join(__dirname , 'valider.ejs'))
})


// export
module.exports = commanderRouter