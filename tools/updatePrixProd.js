// fonction pour généré le HTML
function updatePrixProd(){
    // variables utilisées
    const toolsProd = require('../tools/toolsProduits')
    var produits = toolsProd.GetProduits()
    var listeProd = document.getElementById("produit");
    var quantite = document.getElementById("quantite");
    var nomProd = listeProd[listeProd.selectedIndex].value;
    var prixUnitProd = 0;
    var prix = 0;
    var reduction = 0;

    // récupère le prix du produit dans le tableau des produits grace à son nom
    for (i = 0; i < produits.length; i++) {
        if(produits[i].nom === nomProd){
            prixUnitProd = produits[i].Prix;
        }
    }

    // calcul du prix
    prix = quantite.value * prixUnitProd;

    // calcul de la réduction
    if(prix>50){
        reduction = prix *0.1;
        if(prix > 100){
            reduction = prix *0.15;
            if(prix > 200){
                reduction = prix * 0.2;
            }
        }
    }

    document.getElementById("prixUnitaire").value = prixUnitProd;
    document.getElementById("prix").value = (prix - reduction).toFixed(2);
    document.getElementById("reduction").value = reduction.toFixed(2);
}

module.exports = updatePrixProd()