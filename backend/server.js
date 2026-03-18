const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// --- IMPORTANT: FIXES CORS ERRORS ---
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));
app.use(express.json());

// --- MONGODB CONNECTION ---
const mongoURI = "mongodb+srv://admin:admin123@cluster0.hzus12a.mongodb.net/?appName=Cluster0";

mongoose.connect(mongoURI)
    .then(() => console.log("Connected to MongoDB Cloud!"))
    .catch(err => console.log("MongoDB Error: ", err));

// --- SCHEMAS ---
const dentistSchema = new mongoose.Schema({
    name: String, qualification: String, experience: String,
    clinicName: String, address: String, location: String, photo: String
});

const appointmentSchema = new mongoose.Schema({
    patientName: String, age: Number, gender: String,
    appointmentDate: String, dentistName: String, clinicName: String
});

const Dentist = mongoose.model('Dentist', dentistSchema);
const Appointment = mongoose.model('Appointment', appointmentSchema);

// --- API ROUTES ---
app.get('/api/dentists', async (req, res) => {
    const dentists = await Dentist.find();
    res.json(dentists);
});

app.post('/api/dentists', async (req, res) => {
    const dentist = new Dentist(req.body);
    await dentist.save();
    res.status(201).json(dentist);
});

app.get('/api/appointments', async (req, res) => {
    const appointments = await Appointment.find();
    res.json(appointments);
});

app.post('/api/appointments', async (req, res) => {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json(appointment);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));