export const DentistCard = ({ d, onBook }) => (
  <div className="card">
    <img src={d.photo} alt={d.name} />
    <div className="card-body">
      <p className="qualification">{d.qualification}</p>
      <h3>{d.name}</h3> {/* Name only once here */}
      <div style={{fontSize: '0.85rem', color: '#64748b', lineHeight: '1.4'}}>
        <p><b>Experience:</b> {d.experience} Years</p>
        <p><b>Clinic:</b> {d.clinicName}</p>
        <p><b>Address:</b> {d.address}</p>
        <p style={{marginTop: '6px', fontSize: '0.75rem', color: '#94a3b8', fontWeight: '700'}}>📍 {d.location}</p>
      </div>
      <button className="btn-book" onClick={() => onBook(d)}>Book Appointment</button>
    </div>
  </div>
);