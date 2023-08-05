import { Outlet } from 'react-router-dom';
import './home.scss';
import Sidebar from 'components/Sidebar/Sidebar';
import Header from 'components/header/Header';
// import { themeState } from 'redux/theme/themeSlice';
import { selectCurrentTheme } from 'redux/auth/auth-slice';

import { useSelector } from 'react-redux';

const Home = () => {
  // const theme = useSelector(themeState);
  const theme = useSelector(selectCurrentTheme);
  return (
    <div className="home">
      <Sidebar />
      <div className={`home-wrapper theme-${theme}`}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
