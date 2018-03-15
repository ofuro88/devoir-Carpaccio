const express = require('express')
const commandesRouter = express.Router()
const bodyParser = require('body-parser')
const path = require('path')
const tools = require('../tools/toolsCommandes')

var produits = tools.GetProduits()
var commandes = tools.GetCommandes()

commandesRouter.use(bodyParser.urlencoded({extended: true}))
commandesRouter.use(bodyParser.json())

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
        req.client =req.body.data.client
        req.produuit = req.body.data.produit
        req.quantite = req.body.data.quantite
        req.date = req.body.data.date
        req.saison = req.body.data.saison
        next()
    }
    else {
        res.status(400).json({ error: 'Invalid person data' })
    }
}

// lectures
commandesRouter.get('/', (req, res) => res.sendFile(path.join(__dirname , 'commander.html')))
// commandesRouter.get('/', (req, res) => res.json(produits))
// commandesRouter.get('/:commandeId', findProduitAndPutInRequest, interruptIfNotFound,
//     (req, res) => res.json(req.person)
// )

// création
commandesRouter.post('/', validateCommandeData, (req, res) => {
    console.log(req.body)
    const commande = Object.assign({ id: tools.GetLastCommandeId()+1 }, req.commandeData)
    tools.AddCommande(commande)
    console.log(commandes)
    res.status(201).json(commande)
})

// modification
commandesRouter.put('/:personId', validateCommandeData, findProduitAndPutInRequest, interruptIfNotFound, (req, res) => {
    produits[req.personIndex] = Object.assign(req.person, req.personData)
    res.status(200).json(produits[req.personIndex])
})

// modification différencielle (modifie seulement les champs voulus, n'écrase pas tous les champs)
commandesRouter.patch('/:personId', findProduitAndPutInRequest, interruptIfNotFound, (req, res) => {
    Object.assign(produits[req.personIndex], req.personData);
    res.status(200).json(person)
})

// suppression
commandesRouter.delete('/:personId', findProduitAndPutInRequest, interruptIfNotFound, (req, res) => {
    produits.splice(req.personIndex, 1)
    res.status(204).end()
})


// export
module.exports = commandesRouter