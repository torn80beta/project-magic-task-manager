import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({
  component: Component,
  redirectTo = '/welcome',
}) => {
  // const { isLoggedIn, isVerified } = useAuth();
  // return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
