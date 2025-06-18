import { Routes, Route } from 'react-router-dom';
import AdminLogin from '../components/admin/AdminLogin';
import AdminDashboard from '../components/admin/AdminDashboard';

const AdminRoutes = () => (
  <Routes>
    <Route path="login" element={<AdminLogin />} />
    <Route path="dashboard" element={<AdminDashboard />} />
  </Routes>
);

export default AdminRoutes;
