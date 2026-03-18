const { DataTypes } = require('sequelize');
const sequelize = require('../server');

const Appointment = sequelize.define('Appointment', {
    patientName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    appointmentDate: DataTypes.STRING,
    dentistName: DataTypes.STRING,
    clinicName: DataTypes.STRING
});

module.exports = Appointment;