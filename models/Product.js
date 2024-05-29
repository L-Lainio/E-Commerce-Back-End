//  * Import important parts of sequelize library

const { Model, DataTypes } = require('sequelize');

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
			type: DataTypes.DECIMAL,
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
				model: 'category',
				key: 'id',
			},
		},
	},
	{
		await sequelize.sync(); // Pass the Sequelize instance here
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'product',
	}
);
