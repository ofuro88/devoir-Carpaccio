const express = require('express')
const app = express()
const path = require('path')
app.use(require('body-parser').json())

// affiche la page d'accueil
app.get('/', (req, res) => res.render('index.ejs'))

// rédirige vers les pages de commander et commandes
app.use('/commander', require('./routers/commander'))
app.use('/commandes', require('./routers/commandes'))
app.use('/valider', require('./routers/valider'))

// lancement du serveur web
app.listen(3000, () => console.log('On http://localhost:3000/'))