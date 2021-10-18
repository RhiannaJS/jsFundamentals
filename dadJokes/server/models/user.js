const{DataTypes} = require("sequelize");
const db = require("../db");

const User = db.define("user", {
    username: {
        unique: true,
        type: DataTypes.STRING,
    },
    email: {
        require: true,
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        require: true,
        allowNull: false,
        type: DataTypes.STRING,
        unique: false
    }
})

module.exports = User;