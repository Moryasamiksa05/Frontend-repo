import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import NameForm from './components/NameForm';
import Welcome from './components/Welcome';
import EditProfile from './components/EditProfile';
import Dashboard from './components/Dashboard';
import AdminRoutes from './routes/AdminRoutes';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/name" element={<NameForm />} />
        <Route path="/edit-profile" element={<EditProfile />} />
         <Route path="/*" element={<AdminRoutes/>} />
      </Routes>
    </Router>
  );
}

export default App;
