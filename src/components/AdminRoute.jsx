import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const AdminRoute = ({ children }) => {
  const { user, role, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user || role !== 'superadmin') {
    return <Navigate to="/login" />;
  }

  return children;
};

export default AdminRoute;
