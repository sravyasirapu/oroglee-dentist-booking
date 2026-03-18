import React from 'react';

export const AdminTable = ({ appointments }) => (
  <div className="admin-container" style={{padding: '20px'}}>
    <div className="admin-header" style={{marginBottom: '30px', textAlign: 'center'}}>
      <h1 style={{fontSize: '2rem', color: '#0f172a', fontWeight: '800'}}>Admin Panel</h1>
      <p style={{color: '#64748b'}}>Review and manage all patient bookings below.</p>
    </div>

    <div className="table-card" style={{
      background: 'white', 
      borderRadius: '24px', 
      padding: '25px', 
      boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
      overflowX: 'auto',
      border: '1px solid #f1f5f9'
    }}>
      {appointments.length === 0 ? (
        <div style={{textAlign: 'center', padding: '60px', color: '#94a3b8'}}>
           <h3 style={{fontSize: '1.4rem'}}>No Appointments Yet</h3>
           <p>Bookings will appear here as soon as patients submit the form.</p>
        </div>
      ) : (
        <table style={{width: '100%', borderCollapse: 'collapse', minWidth: '800px'}}>
          <thead>
            <tr style={{background: '#f8fafc'}}>
              <th style={thStyle}>Patient Name</th>
              <th style={thStyle}>Age</th>
              <th style={thStyle}>Gender</th>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Dentist</th>
              <th style={thStyle}>Clinic Name</th>
              <th style={thStyle}>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map(app => (
              <tr key={app.id} style={{borderBottom: '1px solid #f1f5f9'}}>
                <td style={tdStyle}><b>{app.patientName}</b></td>
                <td style={tdStyle}>{app.age}</td>
                <td style={tdStyle}>{app.gender}</td>
                <td style={tdStyle}>{app.appointmentDate}</td>
                <td style={tdStyle}>
                  <span style={{color: '#2563eb', fontWeight: '700'}}>{app.dentistName}</span>
                </td>
                <td style={tdStyle}>{app.clinicName}</td>
                <td style={tdStyle}>
                  <span style={{
                    background: '#dcfce7', color: '#166534', 
                    padding: '6px 14px', borderRadius: '20px', fontSize: '11px', fontWeight: '800',
                    textTransform: 'uppercase', letterSpacing: '0.5px'
                  }}>Booked</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  </div>
);

// Professional Styling for Table Cells
const thStyle = { 
  padding: '18px 16px', 
  textAlign: 'left', 
  color: '#475569', 
  fontWeight: '800', 
  fontSize: '13px', 
  textTransform: 'uppercase',
  letterSpacing: '1px'
};

const tdStyle = { 
  padding: '20px 16px', 
  color: '#1e293b', 
  fontSize: '14px' 
};