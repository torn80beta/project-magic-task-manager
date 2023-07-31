import './welcome.scss';
import { useLocation, NavLink } from 'react-router-dom';

const Welcome = () => {
  const location = useLocation();
  return (
    <div className="welcome">
      Welcome Page
      <NavLink to={'../auth/login'} state={{ from: location }}>
        Login
      </NavLink>
      <NavLink to={'../auth/register'} state={{ from: location }}>
        Register
      </NavLink>
    </div>
  );
};

export default Welcome;
