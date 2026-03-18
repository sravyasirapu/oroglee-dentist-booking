const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
app.use(cors());
app.use(express.json());

// --- DATABASE SETUP ---
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: false // Keeps the terminal clean
});

// --- MODELS (Defined directly here for simplicity) ---
const Dentist = sequelize.define('Dentist', {
    name: DataTypes.STRING,
    qualification: DataTypes.STRING,
    experience: DataTypes.STRING,
    clinicName: DataTypes.STRING,
    address: DataTypes.STRING,
    location: DataTypes.STRING,
    photo: DataTypes.STRING
});

const Appointment = sequelize.define('Appointment', {
    patientName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    appointmentDate: DataTypes.STRING,
    dentistName: DataTypes.STRING,
    clinicName: DataTypes.STRING
});

// Sync Database
sequelize.sync().then(() => console.log("Database & Tables Ready!"));

// --- API ROUTES ---

// 1. GET all dentists
app.get('/api/dentists', async (req, res) => {
    const dentists = await Dentist.findAll();
    res.json(dentists);
});

// 2. POST (Add) a new dentist
app.post('/api/dentists', async (req, res) => {
    try {
        const dentist = await Dentist.create(req.body);
        res.status(201).json(dentist);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// 3. GET all appointments (For Admin)
app.get('/api/appointments', async (req, res) => {
    const appointments = await Appointment.findAll();
    res.json(appointments);
});

// 4. POST (Book) an appointment
app.post('/api/appointments', async (req, res) => {
    try {
        const appointment = await Appointment.create(req.body);
        res.status(201).json(appointment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));