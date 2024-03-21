const express = require ('express');
const router = express.Router();

const actionController = require ('./controllers/action_Controller');

//recuperation de la totalité des actions, sur la page Accueil de l'app 
router.get('/', actionController.listActions);

//recuperation d'une seule action pour afficher un champs prè-remplie avant modification 
router.get('/action/:id', actionController.getActionById);

//creation d'une nouvelle action, à partir de la page AjoutAction
router.post('/action', actionController.createAction);

//mise à jour d'une action à partir de la page ModifAction
router.put('/action/:id', actionController.updateAction);

//suppression d'une action, à partir de l'icone supprimer situé sur la card
router.delete('/action/:id', actionController.deleteAction);

module.exports = router;
