import React from 'react';

export const AdminTable = ({ appointments }) => (
  <div className="admin-section">
    <div className="admin-header">
      <h1>Appointment Dashboard</h1>
      <p style={{color: '#64748b', marginTop: '10px'}}>Total Bookings: <b>{appointments.length}</b></p>
    </div>

    <div className="admin-card">
      {appointments.length === 0 ? (
        <div style={{textAlign: 'center', padding: '40px', color: '#94a3b8'}}>
          <h3>No Appointments Found</h3>
          <p>Bookings will appear here automatically.</p>
        </div>
      ) : (
        <table className="modern-table">
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Date</th>
              <th>Dentist</th>
              <th>Clinic</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map(app => (
              <tr key={app._id}>
                <td style={{fontWeight: '700'}}>{app.patientName}</td>
                <td>{app.age} Yrs</td>
                <td>{app.gender}</td>
                <td style={{fontWeight: '600', color: '#475569'}}>{app.appointmentDate}</td>
                <td style={{color: '#2563eb', fontWeight: '700'}}>{app.dentistName}</td>
                <td style={{fontSize: '0.85rem', color: '#64748b'}}>{app.clinicName}</td>
                <td><span className="status-badge">Confirmed</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  </div>
);