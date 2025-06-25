import React, { useEffect, useState } from 'react';
import './ViewSubscribers.css';

function ViewSubscribers() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/newsletter')
      .then((res) => res.json())
      .then((data) => setEmails(data));
  }, []);

  return (
    <div className="table-container">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {emails.map((e, i) => (
            <tr key={i}>
              <td>{e.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewSubscribers;
