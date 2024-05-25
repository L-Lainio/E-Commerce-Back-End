// Import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Provide the correct file path to import Sequelize

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }

// Set up fields and rules for Product model
Product.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		product_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		price: {
			type: DataTypes.DECIMAL(10, 2),
			allowNull: false,
			validate: {
				isDecimal: true,
			},
		},
		stock: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 10,
			validate: {
				isNumeric: true,
			},
		},
		category_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "category",
				key: "id",
			},
		},
	},
	{
		sequelize, // Make sure sequelize is passed correctly
		modelName: 'Product', // Add a modelName if needed
		tableName: 'products', // Specify the table name if different from the model name
		timestamps: false, // Disable timestamps if not needed
		// Add any other necessary options
	}
);

module.exports = Product;
