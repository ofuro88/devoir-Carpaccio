function updateProd() {
    // variables utilisées
    const tools = require('./toolsProduits')
    const updatePrixProd = require('./updatePrixProd')
    var listeProd = document.getElementById("produit");
    var saison = document.getElementById("saison");
    var indexSaison = saison.selectedIndex;

    // tableau des produits
    var produits = tools.GetProduits()

    // remise du combo à zéro avant de re remplir
    listeProd.innerHTML = '';

    // boucle pour générer la combo box des produits
    for (i = 0; i < produits.length; i++) {
        if (produits[i].Saison === saison[indexSaison].value) {
            var option = document.createElement("option");
            option.text = produits[i].nom;
            listeProd.appendChild(option);
        }
    }

    // affiche par défaut le prix
    updatePrixProd();
}

module.exports = updateProd()