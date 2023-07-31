import { NavLink } from 'react-router-dom';
import './home.scss';
import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import ScreensPage from 'components/ScreensPage/ScreensPage';

const Home = () => {
  return (
    <div className="home">
      <Header>
        <NavLink to={'welcome'}>To welcome page</NavLink>
      </Header>
      This is Homepage of Magic Task Manager!
      <Sidebar />
      <ScreensPage />
    </div>
  );
};

export default Home;
