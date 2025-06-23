import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Register from './components/Register';
import Login from './components/Login';
import NameForm from './components/NameForm';
import Dashboard from './components/Dashboard';
import Welcome from './components/Welcome';
import EditProfile from './components/EditProfile';
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminRoutes from './routes/AdminRoutes';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/name" element={<NameForm />} />
        <Route path="/edit-profile" element={<EditProfile />} />

        
        <Route path="/admin/*" element={<AdminRoutes />}>
          <Route path="login" element={<AdminLogin />} />
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
