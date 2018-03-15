for (i = 0; i < produits.size;i++){
    //Booleen disant si il est selectionné.


    if(produits[i].Saison.equals("Hiver")){
        var doc = document.getElementById("produits");
        var option =document.createElement("option");
        option.text = produits[i].nom;
        doc.add(option);     }

    if(produits[i].Saison.equals("Automne")){
        var doc = document.getElementById("produits");
        var option =document.createElement("option");
        option.text = produits[i].nom;
        doc.add(option);     }

    if(produits[i].Saison.equals("Ete")){
        var doc = document.getElementById("produits");
        var option =document.createElement("option");
        option.text = produits[i].nom;
        doc.add(option);     
    }

    if(produits[i].Saison.equals("Printemps")){
        var doc = document.getElementById("produits");
        var option =document.createElement("option");
        option.text = produits[i].nom;
        doc.add(option);  
    }
}