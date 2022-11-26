const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Person = sequelize.define('person', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    first_name: {type: DataTypes.STRING, allowNull: false},
    gender: {type: DataTypes.STRING, allowNull: false},
    friends_ids: {type: DataTypes.ARRAY(DataTypes.INTEGER) }
})

module.exports = {
    Person
}