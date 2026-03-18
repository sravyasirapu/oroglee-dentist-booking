import React from 'react';

export const DentistCard = ({ d, onBook }) => (
  <div className="card">
    <img src={d.photo} alt={d.name} />
    <div className="card-body">
      <p className="qualification">{d.qualification}</p>
      <h3 style={{fontSize: '1.2rem', marginBottom: '8px', color: '#0f172a'}}>{d.name}</h3>
      <div style={{fontSize: '0.85rem', color: '#64748b', lineHeight: '1.4'}}>
        <p><b>Experience:</b> {d.experience} Years</p>
        <p><b>Clinic:</b> {d.clinicName}</p>
        {/* Added Address specifically as per requirement */}
        <p><b>Address:</b> {d.address}</p> 
        <p style={{marginTop: '6px', fontSize: '0.75rem', color: '#94a3b8', fontWeight: '700'}}>
          📍 {d.location}
        </p>
      </div>
      <button className="btn-book" onClick={() => onBook(d)}>Book Appointment</button>
    </div>
  </div>
);