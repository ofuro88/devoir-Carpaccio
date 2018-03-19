let nextCommandeId = 0

module.exports = {
    commandes : [
        {id: nextCommandeId++, client:"Gerard Dupont", produit:"Céleri", quantite:5.4, date :"13/03/2018", saison: 'Hiver',}
    ],
    nextCommandeId: nextCommandeId
}