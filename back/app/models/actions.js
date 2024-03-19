const sequelize = require('../database');
const { Model, Sequelize } = require('sequelize');

class Actions extends Model {}
Actions.init({
    name: Sequelize.STRING
}, {
    sequelize,
    timestamps: false,
    tableName: 'actions'
});

module.exports = Actions;
