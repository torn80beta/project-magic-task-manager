// import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/auth-slice';

export const RestrictedRoute = ({
  component: Component,
  redirectTo = '/welcome',
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const { isLoggedIn, isVerified } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
