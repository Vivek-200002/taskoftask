import React, { useState } from 'react';
import './AddClient.css';

function AddClient() {
  const [form, setForm] = useState({
    name: '',
    description: '',
    designation: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', form.name);
    data.append('description', form.description);
    data.append('designation', form.designation);
    data.append('image', form.image);

    try {
      const response = await fetch('http://localhost:5000/api/clients', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        alert('✅ Client added successfully!');
        setForm({
          name: '',
          description: '',
          designation: '',
          image: null
        });
        // Reset file input manually
        document.getElementById('client-image').value = '';
      } else {
        alert('❌ Failed to add client. Try again.');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('❌ Error connecting to server.');
    }
  };

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <label>
        Client Name:
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Client Description:
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Designation:
        <input
          type="text"
          name="designation"
          value={form.designation}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Client Image:
        <input
          type="file"
          id="client-image"
          name="image"
          accept="image/*"
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Add Client</button>
    </form>
  );
}

export default AddClient;
