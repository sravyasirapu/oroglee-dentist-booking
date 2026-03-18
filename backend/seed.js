const mongoose = require('mongoose');

// Your Cloud Link
const mongoURI = "mongodb+srv://admin:admin123@cluster0.hzus12a.mongodb.net/?appName=Cluster0";

// Dentist Schema
const dentistSchema = new mongoose.Schema({
    name: String, qualification: String, experience: String,
    clinicName: String, address: String, location: String, photo: String
});
const Dentist = mongoose.model('Dentist', dentistSchema);

const dentists = [
    { name: "Dr. Sravya S.", qualification: "BDS, MDS (Orthodontics)", experience: "8", clinicName: "Elite Dental Care", address: "Road No. 12, Banjara Hills", location: "Hyderabad", photo: "https://t4.ftcdn.net/jpg/03/17/85/49/360_F_317854905_2idSd47y4Id17Fvw7qyK7R8A0InXU9Ue.jpg" },
    { name: "Dr. Rahul Verma", qualification: "BDS", experience: "5", clinicName: "Smile Bright Clinic", address: "Kukatpally Housing Board", location: "Hyderabad", photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400" },
    { name: "Dr. Ananya Rao", qualification: "MDS (Periodontics)", experience: "6", clinicName: "Global Dental", address: "Jubilee Hills", location: "Hyderabad", photo: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&q=80&w=500" },
    { name: "Dr. Vikram Seth", qualification: "BDS, MDS (Endodontics)", experience: "12", clinicName: "Root Canal Center", address: "Gachibowli", location: "Hyderabad", photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=500" },
    { name: "Dr. Meera Kapoor", qualification: "BDS", experience: "4", clinicName: "Family Dental", address: "Kondapur", location: "Hyderabad", photo: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=500" }
];

const seed = async () => {
    try {
        console.log("Connecting directly to MongoDB...");
        await mongoose.connect(mongoURI);
        console.log("Clearing old data...");
        await Dentist.deleteMany({}); // Wipes everything
        console.log("Adding 5 fresh doctors...");
        await Dentist.insertMany(dentists);
        console.log("✅ SUCCESS! 5 Doctors added to Cloud Database.");
        process.exit();
    } catch (err) {
        console.error("❌ Seed Error:", err);
        process.exit(1);
    }
};

seed();