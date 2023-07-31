import './auth.scss';
import { NavLink, Outlet } from 'react-router-dom';

const Auth = () => {
  return (
    <div className="auth">
      Auth page
      <NavLink to={'../welcome'}>To welcome page</NavLink>
      <Outlet />
    </div>
  );
};

export default Auth;
