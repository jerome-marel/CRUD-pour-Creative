//déclaration du .env  afin de récupéré les variables d'environnement cachées 
require('dotenv').config();

//déclaration des modules à utiliser
const express = require ('express');
const cors = require ('cors');
const router = require ('./app/router');

const app = express ();
const PORT = process.env.PORT

//on demande à express d'utiliser le module cors qui sert à sécuriser les requêtes
app.use(cors());

//on demande à express d'extraire les données envoyées dans le corps de la requête
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//on utilise le fichier route auquel les requêtes seront redirigees
app.use(router);

//on lance le serveur sur le port à surveiller déclaré dans le .env
app.listen(PORT, () => {
    console.log(`API démarrée sur http://localhost:${PORT}`)
})