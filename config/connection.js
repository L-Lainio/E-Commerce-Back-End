require('dotenv').config();

const Sequelize = require('sequelize');

// module database.js

const Sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    dialectOptions: {
      decimalNumbers: true,
    },
  });
module.exports = { sequelize };
