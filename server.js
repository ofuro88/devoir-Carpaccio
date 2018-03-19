const express = require('express')
const app = express()
const path = require('path')
app.use(require('body-parser').json())

// affiche la page d'accueil
app.get('/', (req, res) => res.sendFile(path.join(__dirname , 'index.html')))

// rédirige vers les pages de commander et commandes
app.use('/commander', require('./routers/commander'))
app.use('/commandes', require('./routers/histoCommandes'))

// lancement du serveur web
app.listen(3000, () => console.log('On http://localhost:3000/'))