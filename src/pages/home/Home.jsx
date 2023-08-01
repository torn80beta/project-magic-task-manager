import { NavLink, Outlet } from 'react-router-dom';
import './home.scss';
import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-wrapper">
        <Header>
          <NavLink to={'welcome'}>To welcome page</NavLink>
        </Header>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
