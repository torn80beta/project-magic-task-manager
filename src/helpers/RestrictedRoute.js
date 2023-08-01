// import { useAuth } from 'hooks/useAuth';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({
  component: Component,
  redirectTo = '/welcome',
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); //TEMP!!!
  // const { isLoggedIn, isVerified } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
