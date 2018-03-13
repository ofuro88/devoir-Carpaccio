var { produits } = require('../data/produitsData')
var { commandes, lastCommandeId } = require('../data/commandesData')

 function GetProduits(){
    return produits
 }

function GetCommandes(){
    return commandes
}

function GetLastCommandeId() {
    return lastCommandeId
}

function AddCommande(pCommande){
    lastCommandeId++
    commandes.push(pCommande)
}

module.exports = {
    GetProduits, GetCommandes, GetLastCommandeId, AddCommande
}