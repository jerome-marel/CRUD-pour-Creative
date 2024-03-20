const express = require ('express');
const router = express.Router();

const actionController = require ('./controllers/action_Controller');

//recuperation de la totalité des actions
router.get('/', actionController.listActions);

router.post('/action', actionController.createAction);

router.delete('/action/:id', actionController.deleteAction);

module.exports = router;
