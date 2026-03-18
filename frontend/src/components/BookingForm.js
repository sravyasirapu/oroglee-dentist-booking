import React from 'react';

export const BookingForm = ({ dentist, formData, setFormData, onSubmit, onCancel }) => (
  <div className="modal-overlay">
    <div className="modal-content">
      {/* Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#0f172a', fontWeight: '800' }}>Schedule Visit</h2>
        <p style={{ color: '#64748b', fontSize: '0.95rem', marginTop: '5px' }}>
          Booking with <span style={{ color: '#2563eb', fontWeight: '700' }}> {dentist.name}</span>
        </p>
      </div>

      <form onSubmit={onSubmit}>
        {/* Patient Name */}
        <div className="form-group">
          <label className="form-label">Patient Full Name</label>
          <input 
            className="form-input" 
            placeholder="   Your Name" 
            required 
            onChange={e => setFormData({...formData, patientName: e.target.value})} 
          />
        </div>

        {/* Age & Gender Row */}
        <div style={{ display: 'flex', gap: '15px' }}>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">Age</label>
            <input 
              className="form-input" 
              type="number" 
              placeholder="Years" 
              required 
              onChange={e => setFormData({...formData, age: e.target.value})} 
            />
          </div>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">Gender</label>
            <select 
              className="form-input" 
              onChange={e => setFormData({...formData, gender: e.target.value})}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Appointment Date */}
        <div className="form-group">
          <label className="form-label">Preferred Date</label>
          <input 
            className="form-input" 
            type="date" 
            required 
            onChange={e => setFormData({...formData, appointmentDate: e.target.value})} 
          />
        </div>

        {/* Buttons */}
        <div style={{ marginTop: '30px' }}>
          <button type="submit" className="btn-confirm">
            Confirm Appointment
          </button>
          <button type="button" className="btn-cancel" onClick={onCancel}>
            Maybe Later
          </button>
        </div>
      </form>
    </div>
  </div>
);