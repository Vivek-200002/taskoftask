import React from 'react';

// Admin component imports
import AddProject from './Admin/AddProject';
import AddClient from './Admin/AddClient';
import ViewContacts from './Admin/ViewContacts';
import ViewSubscribers from './Admin/ViewSubscribers';

function AdminPanel() {
  return (
    <div style={{ padding: '30px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Admin Panel</h1>

      <section style={{ marginBottom: '60px' }}>
        <h2>Project Management</h2>
        <AddProject />
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2>Client Management</h2>
        <AddClient />
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2>Contact Form Responses</h2>
        <ViewContacts />
      </section>

      <section>
        <h2>Newsletter Subscribers</h2>
        <ViewSubscribers />
      </section>
    </div>
  );
}

export default AdminPanel;
