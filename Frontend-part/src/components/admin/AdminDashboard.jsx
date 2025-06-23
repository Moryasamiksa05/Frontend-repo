import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');

    if (!token) {
      // No token: redirect to login
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <div className="admin-dashboard-container">
      <h2>Admin Dashboard</h2>

      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default AdminDashboard;
