import { Routes, Route } from 'react-router-dom';
import AdminLogin from '../components/admin/AdminLogin';
import AdminDashboard from '../components/admin/AdminDashboard';

const AdminRoutes = () => (
  <Routes>
    <Route path="/admin/login" element={<AdminLogin />} />
    <Route path="/admin/dashboard" element={<AdminDashboard />} />
  </Routes>
);

export default AdminRoutes;
