import React, { useState } from 'react';
import API from '../api';
import '../components/styles.css';

const NameForm = () => {
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/name', { name });
      setMsg(`Saved name: ${res.data.name}`);

      
      setName('');
    } catch (err) {
      setMsg(err.response?.data?.error || 'Error submitting name');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
        required
      />
      <button type="submit">Save</button>
      <p>{msg}</p>
    </form>
  );
};

export default NameForm;
