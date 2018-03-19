const tools = require('./toolsCommandes')

// récupère le tableau des produits
var produits = tools.GetProduits()

// récupère les combo et l'index de la saison sélectionnée
var listeProd = document.getElementById("produit");
var saison = document.getElementById("saison");
var indexSaison = saison.selectedIndex;

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