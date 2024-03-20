const express = require ('express');
const router = express.Router();

const actionController = require ('./controllers/action_Controller');

//recuperation de la totalité des actions
router.get('/', actionController.listActions);
router.get('/action/:id', actionController.getActionById);

router.post('/action', actionController.createAction);

router.put('/action/:id', actionController.updateAction);

router.delete('/action/:id', actionController.deleteAction);

module.exports = router;
