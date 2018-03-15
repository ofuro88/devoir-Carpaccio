const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))


const commande =[
    {Date :"13/03/2018",produit:"Céleri",Quantite:5.4,nomClient:"Gerard Dupont"}
    // {saison : "",mois : "",produit :"",prixKG : 0.0},
    // {saison : "",mois : "",produit :"",prixKG : 0.0},
    // {saison : "",mois : "",produit :"",prixKG : 0.0},
    // {saison : "",mois : "",produit :"",prixKG : 0.0},
    // {saison : "",mois : "",produit :"",prixKG : 0.0},
    // {saison : "",mois : "",produit :"",prixKG : 0.0}
];

const produits = [
    {nom : "Céleri",Saison : "hiver", Prix : 5.77},
    {nom : "Onion",Saison : "hiver", Prix : 3.32},
    {nom : "Pomme de terre",Saison : "hiver", Prix : 3.20},
    {nom : "Orange",Saison : "hiver", Prix : 3.17},
    {nom : "Kiwi",Saison : "Printemps", Prix : 2.13},
    {nom : "Carotte",Saison : "Printemps", Prix : 2.12},
    {nom : "Asperge",Saison : "Printemps", Prix : 12.55},
    {nom : "Fraise",Saison : "Printemps", Prix : 9.92},
    {nom : "Rhubarbe",Saison : "Printemps", Prix : 3.59},
    {nom : "Betterave",Saison : "Printemps", Prix : 4.70},
    {nom : "Concombre",Saison : "Ete", Prix : 3.18},
    {nom : "Courgette",Saison : "Ete", Prix : 9.29},
    {nom : "Tomate",Saison : "Ete", Prix : 4.54},
    {nom : "Pasteque",Saison : "Ete", Prix : 3.42},
    {nom : "Cerise",Saison : "Ete", Prix : 5.50},
    {nom : "Potiron",Saison : "Automne", Prix : 4.60},
    {nom : "Topinambour",Saison : "Automne", Prix : 3.94},
    {nom : "Poireau",Saison : "Automne", Prix : 4.86},
    {nom : "Figue",Saison : "Automne", Prix : 13.88},
    {nom : "Pomme",Saison : "Automne", Prix : 2.48},
]

// middlewares
// function commandeData(req, res, next) {
//     // console.log(req.body)
//     if(req.body && req.body.firstName && req.body.lastName && req.body.numbers){
//         req.personData = req.body
//         next()
//     }
//     else {
//         res.status(400).json({ error: 'Invalid person data' })
//     }
// }
   

// page d'accueil
app.get('/', (req, res) => res.sendFile(path.join(__dirname , 'index.html')))
    

function addChilds(){
    for (i = 0; i < 20;i++){
        if(produits[i].Saison == "hiver"){
            var doc = document.getElementById("produits");
            var option =document.createElement("option");
            option.text = "produits[i].nom";
            doc.add(option);     
        }
    
        if(produits[i].Saison.equals("Automne")){
            var doc = document.getElementById("produits");
            var option =document.createElement("option");
            option.text = produits[i].nom;
            doc.add(option);     }
    
        if(produits[i].Saison.equals("Ete")){
            var doc = document.getElementById("produits");
            var option =document.createElement("option");
            option.text = produits[i].nom;
            doc.add(option);     }
    
        if(produits[i].Saison.equals("Printemps")){
            var doc = document.getElementById("produits");
            var option =document.createElement("option");
            option.text = produits[i].nom;
            doc.add(option);  
        }
    }
}
    
// création commande
app.post('/', (req, res) => {
    // req.date = document.getElementById('date').value
    // req.client = document.getElementById('client').value
    // req.produit = document.getElementById('produit').value
    // req.quantite = document.getElementById('quantite').value
    // req.saison = document.getElementById('saison').value
    console.log(req.body)
    // const commande = Object.assign({ id: tools.GetNextPersonId() }, req.personData)
    res.status(200).send({ message : "Merci pour votre commande"})})

// lancement du serveur web
app.listen(3000, () => console.log('On http://localhost:3000/'))