import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const token = localStorage.getItem('token');
  const isAuthenticated = token !== null;

  return isAuthenticated ? (
    <Route {...props} />
  ) : (
    <Navigate to="/" replace />
  );
};

export default ProtectedRoute;