

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAdmin } from './adminApi';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaSpinner } from 'react-icons/fa';

const AdminLogin = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await loginAdmin(form.email, form.password);
      localStorage.setItem('adminToken', res.token);
      toast.success('Login successful!');
      setTimeout(() => {
        navigate('/admin/dashboard');
      }, 1500);
    } catch (err) {
      const msg = err?.response?.data?.error || 'Login failed';
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
      setForm({ email: '', password: '' }); 
    }
  };

  return (
    <div className="admin-login-container">
      <h2  className='home'>Admin Login</h2>
      <form onSubmit={handleSubmit} className="admin-login-form">
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? <FaSpinner className="spinner" /> : 'Login'}
        </button>
        {error && <p className="error">{error}</p>}
      </form>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default AdminLogin;

