const Actions = require("../models/actions");

const actionController = {
  async listActions(req, res) {
    try {
      const actions = await Actions.findAll();
      res.json(actions);
    } catch (error) {
      console.error(
        "Une erreur est survenue lors de la récupération des actions :",
        error.message
      );
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  },
};

module.exports = actionController;
