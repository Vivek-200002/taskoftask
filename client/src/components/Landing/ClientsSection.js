import React, { useEffect, useState } from 'react';
import './ClientsSection.css';

function ClientsSection() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/clients')
      .then((res) => res.json())
      .then((data) => setClients(data))
      .catch((err) => console.error('Error fetching clients:', err));
  }, []);

  return (
    <div className="clients">
      <h2>Happy Clients</h2>
      <div className="client-list">
        {clients.map((client, index) => (
          <div key={index} className="client-card">
            <img src={client.imageUrl} alt={client.name} />
            <h3>{client.name}</h3>
            <p className="designation"><em>{client.designation}</em></p>
            <p>{client.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientsSection;
