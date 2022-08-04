// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category);

// Categories have many Products
Category.hasMany(Product);

// Products belongToMany Tags (through ProductTag)
User.belongsToMany(Post, {
  through: ProductTag,
  as: 'ProductTag'
});

// Tags belongToMany Products (through ProductTag)
Tags.belongsToMany(Products, {
  through: ProductTag,
  as: 'ProductTag'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
