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

  async createAction(req, res) {
    try {
      const { name } = req.body;
      const action = await Actions.create({ name });
      res.status(201).json(action);
    } catch (error) {
      console.error(
        "Une erreur est survenue lors de la création d'une action :",
        error.message
      );
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  },

  async updateAction(req, res) {
    try {
      const { id } = req.params;
      const action = await Actions.findByPk(id);
      if (!action) {
        return res.status(404).json({ error: "Action introuvable" });
      }
      
      const { name } = req.body;
      action.set({ name });
      await action.save();
      res.json(action);

    } catch (error) {
      console.error(
        "Une erreur est survenue lors de la mise à jour d'une action :",
        error.message
      );
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  },

  async deleteAction(req, res) {
    try {
      const { id } = req.params;
      await Actions.destroy({ where: { id } });
      res.sendStatus(204);
    } catch (error) {
      console.error(
        "Une erreur est survenue lors de la suppression d'une action :",
        error.message
      );
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  },

  async getActionById(req, res) {
    try {
      const { id } = req.params;
      const action = await Actions.findByPk(id);
      if (!action) {
        return res.status(404).json({ error: "Action introuvable" });
      }
      res.json(action);
    } catch (error) {
      console.error("Erreur lors de la récupération de l'action :", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }
};

module.exports = actionController;
