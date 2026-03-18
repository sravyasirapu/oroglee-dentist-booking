const { DataTypes } = require('sequelize');
const sequelize = require('../server'); // Import the connection from server.js

const Dentist = sequelize.define('Dentist', {
    name: DataTypes.STRING,
    qualification: DataTypes.STRING,
    experience: DataTypes.STRING,
    clinicName: DataTypes.STRING,
    address: DataTypes.STRING,
    location: DataTypes.STRING,
    photo: DataTypes.STRING
});

module.exports = Dentist;