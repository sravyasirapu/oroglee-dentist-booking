import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './App.css';
import { DentistCard } from './components/DentistCard';
import { BookingForm } from './components/BookingForm';
import { AdminTable } from './components/AdminTable';

function App() {
  const [dentists, setDentists] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [view, setView] = useState('user');
  const [selectedDentist, setSelectedDentist] = useState(null);
  const [formData, setFormData] = useState({ patientName: '', age: '', gender: 'Male', appointmentDate: '' });

  // --- REPLACE THIS WITH YOUR ACTUAL RENDER LINK ---
  const API_URL = "http://localhost:5000";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(`${API_URL}/api/dentists`).then(res => setDentists(res.data)).catch(err => console.log(err));
    axios.get(`${API_URL}/api/appointments`).then(res => setAppointments(res.data)).catch(err => console.log(err));
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/api/appointments`, { 
        ...formData, 
        dentistName: selectedDentist.name, 
        clinicName: selectedDentist.clinicName 
      });
      Swal.fire({ title: 'Success!', text: 'Appointment Booked with ' + selectedDentist.name, icon: 'success' });
      setSelectedDentist(null);
      fetchData();
    } catch (err) {
      Swal.fire('Error', 'Failed to book', 'error');
    }
  };

  return (
    <div className="container">
      <nav className="navbar">
        <h2 style={{fontWeight: '800'}}>OroGlee <span style={{color: '#2563eb'}}>Dental</span></h2>
        <div className="btn-group">
          <button className={`btn-nav ${view === 'user' ? 'btn-active' : 'btn-inactive'}`} onClick={() => setView('user')}>Find Dentist</button>
          <button className={`btn-nav ${view === 'admin' ? 'btn-active' : 'btn-inactive'}`} onClick={() => setView('admin')}>Admin</button>
        </div>
      </nav>

      {view === 'user' ? (
        <>
          <div className="hero"><h1>Expert Dental Care</h1><p>Your smile is our priority.</p></div>
          <div className="dentist-grid">
            {dentists.map(d => <DentistCard key={d._id} d={d} onBook={setSelectedDentist} />)}
          </div>
          {selectedDentist && <BookingForm dentist={selectedDentist} formData={formData} setFormData={setFormData} onSubmit={handleBooking} onCancel={() => setSelectedDentist(null)} />}
        </>
      ) : <AdminTable appointments={appointments} />}
    </div>
  );
}
export default App;