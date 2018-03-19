const express = require('express')
const commanderRouter = express.Router()
const bodyParser = require('body-parser')
const path = require('path')
const tools = require('../tools/toolsCommandes')

var produits = tools.GetProduits()
var commandes = tools.GetCommandes()

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
    if(req.body){
        req.commandeData = req.body
        next()
    }
    else {
        res.status(400).json({ error: 'Invalid person data' })
    }
}

// lectures
commanderRouter.get('/', (req, res) => res.sendFile(path.join(__dirname , 'commander.html')))
// commandesRouter.get('/', (req, res) => res.json(produits))
// commandesRouter.get('/:commandeId', findProduitAndPutInRequest, interruptIfNotFound,
//     (req, res) => res.json(req.person)
// )

// création
commanderRouter.post('/', validateCommandeData, (req, res) => {
    const commande = Object.assign({ id: tools.GetNextCommandeId() }, req.commandeData)
    tools.AddCommande(commande)
    console.log(commandes)
    res.status(204).end()
})

// modification
commanderRouter.put('/:per()sonId', validateCommandeData, findProduitAndPutInRequest, interruptIfNotFound, (req, res) => {
    produits[req.personIndex] = Object.assign(req.person, req.personData)
    res.status(200).json(produits[req.personIndex])
})

// modification différencielle (modifie seulement les champs voulus, n'écrase pas tous les champs)
commanderRouter.patch('/:personId', findProduitAndPutInRequest, interruptIfNotFound, (req, res) => {
    Object.assign(produits[req.personIndex], req.personData);
    res.status(200).json(person)
})

// suppression
commanderRouter.delete('/:personId', findProduitAndPutInRequest, interruptIfNotFound, (req, res) => {
    produits.splice(req.personIndex, 1)
    res.status(204).end()
})


// export
module.exports = commanderRouter