const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// CORS FIX
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"]
}));
app.use(express.json());

// --- MONGODB CONNECTION ---
// Using the link directly to ensure it works
const mongoURI = "mongodb+srv://admin:admin123@cluster0.hzus12a.mongodb.net/?appName=Cluster0";

mongoose.connect(mongoURI)
    .then(() => console.log("✅ Connected to MongoDB Cloud!"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));

// --- SCHEMAS ---
const dentistSchema = new mongoose.Schema({
    name: String, qualification: String, experience: String,
    clinicName: String, address: String, location: String, photo: String
});
const appointmentSchema = new mongoose.Schema({
    patientName: String, age: Number, gender: String,
    appointmentDate: String, dentistName: String, clinicName: String
});

// We check if the model exists to prevent "OverwriteModelError"
const Dentist = mongoose.models.Dentist || mongoose.model('Dentist', dentistSchema);
const Appointment = mongoose.models.Appointment || mongoose.model('Appointment', appointmentSchema);

// --- API ROUTES ---

// GET Dentists
app.get('/api/dentists', async (req, res) => {
    try {
        const data = await Dentist.find({});
        res.status(200).json(data);
    } catch (err) {
        console.error("GET Error:", err);
        res.status(500).json({ error: "Failed to fetch dentists", details: err.message });
    }
});

// POST Appointment
app.post('/api/appointments', async (req, res) => {
    try {
        const newApp = new Appointment(req.body);
        await newApp.save();
        res.status(201).json(newApp);
    } catch (err) {
        console.error("POST Error:", err);
        res.status(500).json({ error: "Failed to save appointment" });
    }
});

// Keep these for Admin Panel
app.get('/api/appointments', async (req, res) => {
    try {
        const data = await Appointment.find({});
        res.json(data);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));