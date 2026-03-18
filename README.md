# OroGlee Dentist Appointment Booking Platform

A full-stack MERN application (using SQLite for local data persistence) that allows users to book appointments with dentists and an admin panel to manage them.

## 🚀 Tech Stack
- **Frontend:** React.js, CSS3 (Responsive Design)
- **Backend:** Node.js, Express.js
- **Database:** SQLite (managed via Sequelize ORM)
- **API Communication:** Axios

## 🛠️ Setup Instructions

### 1. Backend Setup
1. `cd backend`
2. `npm install`
3. `npx nodemon server.js` (Server starts on port 5000)
4. (Optional) Run `node seed.js` to populate dentists.

### 2. Frontend Setup
1. `cd frontend`
2. `npm install`
3. `npm start` (App runs on port 3000)

## 📁 Project Structure
- **/backend**: Express server, SQLite configuration, and API routes.
- **/frontend**: React components, state management, and responsive UI.

## ✨ Features implemented
- [x] Responsive Dentist Listing
- [x] Functional Appointment Booking Form
- [x] Admin Panel to view all bookings
- [x] SQLite database for zero-configuration setup