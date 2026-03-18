const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: false
});

const Dentist = sequelize.define('Dentist', {
    name: DataTypes.STRING,
    qualification: DataTypes.STRING,
    experience: DataTypes.STRING,
    clinicName: DataTypes.STRING,
    address: DataTypes.STRING,
    location: DataTypes.STRING,
    photo: DataTypes.STRING
});


const dentists = [
    {
        name: "Dr. Sravya",
        qualification: "BDS, MDS (Orthodontics)",
        experience: "8",
        clinicName: "Elite Dental Care",
        address: "Road No. 12, Banjara Hills",
        location: "Hyderabad",
        photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=500"
    },
    {
        name: "Dr. Rahul Verma",
        qualification: "BDS",
        experience: "5",
        clinicName: "Smile Bright Clinic",
        address: "Kukatpally Housing Board",
        location: "Hyderabad",
        photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=500"
    },
    {
        name: "Dr. Ananya Rao",
        qualification: "MDS (Periodontics)",
        experience: "6",
        clinicName: "Global Dental",
        address: "Jubilee Hills",
        location: "Hyderabad",
        photo: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&q=80&w=500"
    },
    {
        name: "Dr. Vikram Seth",
        qualification: "BDS, MDS (Endodontics)",
        experience: "12",
        clinicName: "Root Canal Center",
        address: "Gachibowli",
        location: "Hyderabad",
        photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=500"
    },
    {
        name: "Dr. Meera Kapoor",
        qualification: "BDS",
        experience: "4",
        clinicName: "Family Dental",
        address: "Kondapur",
        location: "Hyderabad",
        photo: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=500"
    }
];

const seed = async () => {
    try {
        // FORCE: TRUE deletes everything and starts fresh
        await sequelize.sync({ force: true }); 
        await Dentist.bulkCreate(dentists);
        console.log("✅ DATABASE RESET & SEEDED SUCCESSFULLY!");
        process.exit();
    } catch (err) {
        console.error("❌ Error:", err);
        process.exit(1);
    }
};

seed();