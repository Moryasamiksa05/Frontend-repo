import React, { useEffect, useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { FaSpinner } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';

const EditProfile = () => {
  const [form, setForm] = useState({
    newUsername: '',
    newEmail: '',
    currentPassword: '',
    newPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setForm((prev) => ({
        ...prev,
        newUsername: storedUser.username,
        newEmail: storedUser.email
      }));
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const res = await API.put('/edit-user', form, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      localStorage.setItem('user', JSON.stringify(res.data.user));
      toast.success('Profile updated! Redirecting...');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (err) {
      toast.error(err.response?.data?.error || 'Update failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ToastContainer />
      <h2 className='profile'>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="newUsername"
          placeholder="New Username"
          value={form.newUsername}
          onChange={handleChange}
          required
        />
        <input
          name="newEmail"
          placeholder="New Email"
          value={form.newEmail}
          onChange={handleChange}
          required
        />
        <input
          name="currentPassword"
          type="password"
          placeholder="Current Password"
          value={form.currentPassword}
          onChange={handleChange}
          required
        />
        <input
          name="newPassword"
          type="password"
          placeholder="New Password"
          value={form.newPassword}
          onChange={handleChange}
        />
        <button type="submit" disabled={loading}>
          {loading ? <FaSpinner className="spinner" /> : 'Update Profile'}
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
