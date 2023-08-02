import { Outlet } from 'react-router-dom';
import './home.scss';

import Sidebar from 'components/Sidebar/Sidebar';
import Header from 'components/header/Header';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-wrapper">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
