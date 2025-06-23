import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminRoutes = () => {
  return (
    <div className="admin-layout">
      
      <Outlet />
    </div>
  );
};

export default AdminRoutes;

