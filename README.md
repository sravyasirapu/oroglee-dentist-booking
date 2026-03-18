# 🦷 OroGlee Dentist Appointment Booking Platform

A professional Full-Stack MERN application that allows patients to discover top dentists, book appointments instantly, and enables administrators to manage bookings through a dedicated dashboard.

## 🚀 Live Demo & Links
- **Live Website:**  https://oroglee-dentist-booking-8jy3.vercel.app/
- **Backend API:**   https://oroglee-dentist-booking-1.onrender.com

---

## ✨ Key Features
- **Responsive Dentist Listing:** A modern grid view of 5 professional dentists with full details (Photo, Qualification, Experience, Clinic Name, and Location).
- **Instant Booking Flow:** A premium modal-based booking form with validation.
- **Real-time Notifications:** Integrated **SweetAlert2** for beautiful success/error confirmations.
- **Admin Dashboard:** A secure section to view all patient appointments in a clean, tabular format.
- **Cloud Database:** Powered by **MongoDB Atlas** for 24/7 data availability.
- **Fully Responsive:** Optimized for Desktop, Tablet, and Mobile devices.

---

## 🛠️ Tech Stack
- **Frontend:** React.js (Functional Components, Hooks)
- **Styling:** Custom Modern CSS (Glassmorphism, Flexbox, Grid)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (Cloud)
- **API Client:** Axios
- **Popups:** SweetAlert2

---

## 📁 Project Structure
```text
OroGlee_Project/
├── backend/
│   ├── server.js          # Main Express server & MongoDB connection
│   ├── models/            # Database Schemas (Dentist, Appointment)
│   ├── seed.js            # Initial database population script
│   └── package.json       # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── components/    # Reusable UI Components (Card, Form, Table)
│   │   ├── App.js         # Main logic and routing
│   │   ├── App.css        # Premium styling
│   │   └── index.js
│   └── package.json       # Frontend dependencies
└── README.md              # Project documentation
```
---

## ⚙️ Local Setup Instructions
1. Clone the repository
```text
git clone https://github.com/sravyasirapu/oroglee-dentist-booking.git
cd oroglee-dentist-booking
```
2. Backend Setup
```text
cd backend
npm install
node server.js
```
Note: The backend connects to a live MongoDB Atlas cluster. Ensure your IP is whitelisted.

3. Frontend Setup
```text
cd ../frontend
npm install
npm start
```
The app will be available at http://localhost:3000


## 📡 API Endpoints
```text
GET /api/dentists - Fetch all available dentists.
POST /api/dentists - Add a new dentist to the system.
GET /api/appointments - Retrieve all patient bookings.
POST /api/appointments - Create a new appointment.
```
## 👩‍💻 Author
Sirapu Sravya


