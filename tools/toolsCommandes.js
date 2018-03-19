var { produits } = require('../data/produitsData')
var { commandes, nextCommandeId } = require('../data/commandesData')

 function GetProduits(){
    return produits
 }

function GetCommandes(){
    return commandes
}

function GetNextCommandeId() {
    return nextCommandeId
}

function AddCommande(pCommande){
    nextCommandeId++
    commandes.push(pCommande)
}

module.exports = {
    GetProduits, GetCommandes, GetNextCommandeId, AddCommande
}