const fs = require('fs')
const path = require('path')
var produits = {}

function GetProduits(){
     // lit le fichier JSON et le parse pour obtenir un objet de commandes
                // path.resolve ---> pour créer le chemin relatif
                // __dirname renvoi le dossier en cours (ici) donc "../" pour remonter d'un dossier
    produits = JSON.parse(fs.readFileSync((path.resolve(__dirname , '../data/produitsData.json')), 'utf8'));
    return produits
}

module.exports = {
    GetProduits
}