import React, { useState } from 'react';
import API from '../api';
import '../components/Styles.css';
import { FaSpinner } from 'react-icons/fa';

const NameForm = () => {
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false); //  Spinner state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await API.post('/name', { name });
      setMsg(`Saved name: ${res.data.name}`);
      setName('');
    } catch (err) {
      setMsg(err.response?.data?.error || 'Error submitting name');
    } finally {
      setLoading(false);
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
      <button type="submit" disabled={loading}>
        {loading ? <FaSpinner className="spinner" /> : 'Save'}
      </button>
      <p>{msg}</p>
    </form>
  );
};

export default NameForm;
