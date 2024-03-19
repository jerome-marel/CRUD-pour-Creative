require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.PG_URL, {
  dialect: 'postgres', 
});

async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection à la BDD réussie !');
  } catch (error) {
    console.error('Une erreur a lieu à la connexion avec notre BDD : ', error.message);
  }
}

connectToDatabase();

module.exports = sequelize;
