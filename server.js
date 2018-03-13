const express = require('express')
const app = express()
const path = require('path')
app.use(require('body-parser').json())

// affiche la page d'accueil
app.get('/', (req, res) => res.sendFile(path.join(__dirname , 'index.html')))

// rédirige vers la page de commande
app.use('/commander', require('./routers/commander'))

// lancement du serveur web
app.listen(3000, () => console.log('On http://localhost:3000/'))