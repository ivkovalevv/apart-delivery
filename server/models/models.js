const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
  userName: { type: DataTypes.STRING, defaultValue: "Гость" },
  userTel: { type: DataTypes.STRING, defaultValue: "+79999999999" },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "default-avatar.png",
  },
  ordersHistory: { type: DataTypes.STRING, allowNull: true },
});

const Cart = sequelize.define("cart", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const CartMenuItem = sequelize.define("cart_menu_item", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const MenuItem = sequelize.define("menu_item", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  image: { type: DataTypes.STRING, allowNull: false },
  promo: { type: DataTypes.BOOLEAN, defaultValue: false },
  raiting: { type: DataTypes.BOOLEAN, defaultValue: false },
});

const Type = sequelize.define("type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const MenuItemInfo = sequelize.define("menu_item_info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

User.hasOne(Cart);
Cart.belongsTo(User);

Cart.hasMany(CartMenuItem);
CartMenuItem.belongsTo(Cart);

Type.hasMany(MenuItem);
MenuItem.belongsTo(Type);

MenuItem.hasMany(CartMenuItem);
CartMenuItem.belongsTo(MenuItem);

MenuItem.hasMany(MenuItemInfo, { as: "info" });
MenuItemInfo.belongsTo(MenuItem);

module.exports = {
  User,
  Cart,
  CartMenuItem,
  MenuItem,
  Type,
  MenuItemInfo,
};
