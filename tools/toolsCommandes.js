var { produits } = require('../data/produitsData')
const fs = require('fs')
const path = require('path')
var commandes = {}

 function GetProduits(){
    return produits
 }

function GetCommandes(){
     // lit le fichier JSON et le parse pour obtenir un objet de commandes
                // path.resolve ---> pour créer le chemin relatif
                // __dirname renvoi le dossier en cours (ici) donc "../" pour remonter d'un dossier
     commandes = JSON.parse(fs.readFileSync((path.resolve(__dirname , '../data/commandesData.json')), 'utf8'));
    return commandes
}

function AddCommande(pCommande){
    // récupère les commandes
    commandes = GetCommandes()
    // ajoute la nouvelle commandes
    commandes.push(pCommande)
    // écrase le contenu du fichier JSON pour re-sauvegarder les commandes
    fs.writeFileSync((path.resolve(__dirname , '../data/commandesData.json')), JSON.stringify(commandes), 'utf8')
}

module.exports = {
    GetProduits, GetCommandes, AddCommande
}