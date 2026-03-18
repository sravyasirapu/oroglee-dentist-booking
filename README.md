# 🦷 OroGlee Dentist Appointment Booking Platform

A professional Full-Stack MERN application that allows patients to discover top dentists, book appointments instantly, and enables administrators to manage bookings through a dedicated dashboard.

## 🚀 Live Demo & Links
- **Live Website:** [https://oroglee-dentist-booking-8jy3.vercel.app/]
- **Backend API:** [Insert your Render URL here]

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

⚙️ Local Setup Instructions
1. Clone the repository
code
Bash
git clone https://github.com/sravyasirapu/oroglee-dentist-booking.git
cd oroglee-dentist-booking
2. Backend Setup
code
Bash
cd backend
npm install
node server.js
Note: The backend connects to a live MongoDB Atlas cluster. Ensure your IP is whitelisted.
3. Frontend Setup
code
Bash
cd ../frontend
npm install
npm start
The app will be available at http://localhost:3000
📡 API Endpoints
GET /api/dentists - Fetch all available dentists.
POST /api/dentists - Add a new dentist to the system.
GET /api/appointments - Retrieve all patient bookings.
POST /api/appointments - Create a new appointment.
👩‍💻 Author
Sirapu Sravya
MERN Stack Developer Aspirant
GitHub Profile
code
Code
---

### **Step 3: Update the Links**
In the `README.md` file you just pasted:
1.  **Replace** `[Insert your Vercel URL here]` with your live website link.
2.  **Replace** `[Insert your Render URL here]` with your backend link.
3.  **Replace** `[Insert your Loom/Video Link here]` with your screen recording link.

---

### **Step 4: Push to GitHub (The Final Push!)**
In your VS Code terminal (main folder):
1.  `git add README.md`
2.  `git commit -m "Docs: Added professional README"`
3.  `git push origin main`

---

### **YOU ARE OFFICIALLY FINISHED!** 🥳🏁🚀
