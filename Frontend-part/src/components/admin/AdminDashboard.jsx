import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) navigate('/admin/login');
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={() => {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
      }}>
        Logout
      </button>
    </div>
  );
};

export default AdminDashboard;
