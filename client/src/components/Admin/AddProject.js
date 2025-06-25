import React, { useState } from 'react';
import './AddProject.css';

function AddProject() {
  const [form, setForm] = useState({
    name: '',
    description: '',
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
    data.append('image', form.image);

    await fetch('http://localhost:5000/api/projects', {
      method: 'POST',
      body: data,
    });

    alert('Project added successfully');
    setForm({ name: '', description: '', image: null });
  };

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Project Name" value={form.name} onChange={handleChange} required />
      <textarea name="description" placeholder="Project Description" value={form.description} onChange={handleChange} required />
      <input type="file" name="image" accept="image/*" onChange={handleChange} required />
      <button type="submit">Add Project</button>
    </form>
  );
}

export default AddProject;
