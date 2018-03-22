const express = require('express')
const commanderRouter = express.Router()
const bodyParser = require('body-parser')
const path = require('path')
const tools = require('../tools/toolsCommandes')
const { Readable, Writable, Transform } = require('stream')
const { promisify } = require('util')
const readline = require('readline')
const fs = require('fs')
const promiseFsWriteFile = promisify(fs.writeFile)

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
    if(req.body && req.body.client && req.body.saison && req.body.produit && req.body.quantite && req.body.date){
        req.commandeData = req.body
        next()
    }
    else {
        res.status(400).json({ error: 'Invalid purchase data' })
    }
}

function enregistrementJSON(commande){
    console.log('on passe dans l\'enregisteur : '+ commande.id)
   /* const enregistrementCommande = new Writable({
        objectMode: true,
      
        write(commande, encoding, next) {
          const filepath = path.join(
            __dirname,
            `commande_${commande.id}.json`
          )

          console.log('fichier créer : ' + filepath)
      
          //JSON.stringify(commande))
          promiseFsWriteFile(filepath, 'coucou')
            .then(() => next())
        }
    });*/
    let pathDir = path.join('commandes', 'Refsnes', '..',  'commande_'+ commande.id + '.json');
    var wstream = fs.createWriteStream(pathDir);
    promiseFsWriteFile(pathDir, JSON.stringify(commande))
            .then(() => next())
    //wstream.write(commande);
    // on Node.js older than 0.10, add cb to end()
    wstream.end(function () { console.log('Fichier enregistré : ' + pathDir); });
}

// lectures
commanderRouter.get('/', (req, res) => res.sendFile(path.join(__dirname , 'commander.html')))
commanderRouter.get('../', (req,res) => res.redirect('localhost:3000/'))

// création
commanderRouter.post('/', validateCommandeData, (req, res) => {
    const commande = Object.assign({ id: tools.GetNextCommandeId() }, req.commandeData)
    tools.AddCommande(commande)
    console.log(commandes)
    enregistrementJSON(commande)
    res.sendFile(path.join(__dirname , 'valider.html'))
})

// export
module.exports = commanderRouter