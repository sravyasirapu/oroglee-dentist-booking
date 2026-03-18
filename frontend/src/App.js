import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './App.css';

// Importing our components
import { DentistCard } from './components/DentistCard';
import { BookingForm } from './components/BookingForm';
import { AdminTable } from './components/AdminTable';

function App() {
  // 1. STATE DEFINITIONS (Fixes the 'view is not defined' error)
  const [dentists, setDentists] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [view, setView] = useState('user'); // Controls 'Find Dentist' vs 'Admin Dashboard'
  const [selectedDentist, setSelectedDentist] = useState(null);
  const [formData, setFormData] = useState({ 
    patientName: '', 
    age: '', 
    gender: 'Male', 
    appointmentDate: '' 
  });

  // 2. FETCH DATA FROM BACKEND
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:5000/api/dentists')
      .then(res => setDentists(res.data))
      .catch(err => console.log("Error fetching dentists", err));
      
    axios.get('http://localhost:5000/api/appointments')
      .then(res => setAppointments(res.data))
      .catch(err => console.log("Error fetching appointments", err));
  };

  // 3. BOOKING HANDLER
  const handleBooking = async (e) => {
  e.preventDefault();
  try {
    await axios.post('http://localhost:5000/api/appointments', { 
      ...formData, 
      dentistName: selectedDentist.name, 
      clinicName: selectedDentist.clinicName 
    });
    
    // Updated SweetAlert to avoid "Dr. Dr."
    Swal.fire({
      title: 'Booking Confirmed!',
      text: 'Your appointment with ' + selectedDentist.name + ' is scheduled.',
      icon: 'success',
      confirmButtonColor: '#2563eb',
      customClass: {
        popup: 'swal-wide',
      }
    });

    setSelectedDentist(null);
    fetchData(); // Refresh the data for Admin Table
  } catch (err) {
    Swal.fire('Error', 'Could not save appointment.', 'error');
  }
};

  // 4. UI RENDERING
  return (
    <div className="container">
      {/* PROFESSIONAL NAVBAR */}
      <nav className="navbar">
        <h2 style={{fontWeight: '800', fontSize: '1.6rem'}}>
          OroGlee <span style={{color: '#2563eb'}}>Dental</span>
        </h2>
        <div className="btn-group">
          <button 
            className={`btn-nav ${view === 'user' ? 'btn-active' : 'btn-inactive'}`} 
            onClick={() => setView('user')}
          >
            Find a Dentist
          </button>
          <button 
            className={`btn-nav ${view === 'admin' ? 'btn-active' : 'btn-inactive'}`} 
            onClick={() => setView('admin')}
          >
            Admin Dashboard
          </button>
        </div>
      </nav>

      {view === 'user' ? (
        <>
          {/* HERO SECTION */}
          <div className="hero">
            <h1>Expert Dental Care</h1>
            <p>Your smile is our priority. Book with Hyderabad's top-rated dentists.</p>
          </div>

          {/* DENTIST CARDS GRID */}
          <div className="dentist-grid">
            {dentists.map(d => (
              <DentistCard key={d.id} d={d} onBook={setSelectedDentist} />
            ))}
          </div>

          {/* BOOKING POPUP (MODAL) */}
          {selectedDentist && (
            <BookingForm 
              dentist={selectedDentist} 
              formData={formData} 
              setFormData={setFormData} 
              onSubmit={handleBooking} 
              onCancel={() => setSelectedDentist(null)} 
            />
          )}
        </>
      ) : (
        /* ADMIN TABLE SECTION */
        <AdminTable appointments={appointments} />
      )}
    </div>
  );
}

// 5. EXPORT (Fixes the 'export default was not found' error)
export default App;