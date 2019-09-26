import React from 'react';
import { Redirect } from 'react-router';

const PrivateRoutes = ({ children }) => {
  const token = localStorage.getItem('token');
  if (typeof token !== 'string') return <Redirect to="/login" />;
  return children;
};

export { PrivateRoutes };
