    const {Model, DataTypes} = require('sequelize')
    const sequelize = require('../config/connection')

    class Item extends Model {}

    Item.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName:'item'
    })

    module.exports = Item