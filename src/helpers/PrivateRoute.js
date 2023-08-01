import { Navigate } from 'react-router-dom';
// import { useAuth } from 'hooks/useAuth';
import { useState } from 'react';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  // const { isLoggedIn, isRefreshing } = useAuth();
  const [isLoggedIn, stIsLoggedIn] = useState(false); //TEMP!!!
  const [isRefreshing, stIsRefreshing] = useState(false); //TEMP!!!
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
