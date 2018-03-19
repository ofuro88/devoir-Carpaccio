const tools = require('../tools/toolsCommandes')
let produits = tools.GetProduits()

let doc = document.getElementById("produit");
let option = document.createElement("option");

for (i = 0; i < produits.size; i++) {
    //Booleen disant si il est selectionné.

    if (produits[i].Saison.equals("Hiver")) {
        option.text = produits[i].nom;
        doc.add(option);
    }

    if (produits[i].Saison.equals("Automne")) {
        option.text = produits[i].nom;
        doc.add(option);
    }

    if (produits[i].Saison.equals("Ete")) {
        option.text = produits[i].nom;
        doc.add(option);
    }

    if (produits[i].Saison.equals("Printemps")) {
        option.text = produits[i].nom;
        doc.add(option);
    }
}