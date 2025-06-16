import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import API from '../api';
import '../components/Styles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaSpinner } from 'react-icons/fa';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loadingLogin, setLoadingLogin] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoadingLogin(true);
    try {
      const res = await API.post('/login', form);
      const { user, token } = res.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      toast.success('Login successful!');
      setTimeout(() => {
        navigate('/'); // Go to Welcome after login
      }, 1500);
    } catch (err) {
      toast.error(err.response?.data?.error || 'Login failed');
    } finally {
      setLoadingLogin(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
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
        <button type="submit" disabled={loadingLogin}>
          {loadingLogin ? <FaSpinner className="spinner" /> : 'Login'}
        </button>


        <div  className=" edit">
          <Link to="/edit-profile" >
            Edit Profile
          </Link>
        </div>
      </form>
    </>
  );
};

export default Login;
