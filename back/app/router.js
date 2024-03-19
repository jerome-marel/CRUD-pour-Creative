const express = require ('express');
const router = express.Router();

const actionController = require ('./controllers/action_Controller');

//recuperation de la liste des actions
router.get('/', actionController.listActions);

module.exports = router;
