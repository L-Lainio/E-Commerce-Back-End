const express = require('express');
const routes = require('./routes');
const { Sequelize } = require('sequelize');

// Define your database connection configuration
const sequelize = new Sequelize({
	dialect: 'mysql',
	host: 'localhost',
	username: 'your_username',
	password: 'your_password',
	database: 'your_database_name'
});

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// Sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => {
		console.log(`App listening on port ${PORT}!`);
	});
});
