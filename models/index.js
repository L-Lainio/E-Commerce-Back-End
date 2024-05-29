// import models
import { Sequelize, DataTypes } from 'sequelize';

const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const sequelize = new Sequelize('sqlite::memory:');


// Products belongsTo Category
product.belongsTo(Category, {
  foreignKey: 'category_id'
});
// Categories have many Products
Category.hasMany(product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'productTag_products',
  foreignKey: 'product_id'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'productTag_products',
  foreignKey: 'tag_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
