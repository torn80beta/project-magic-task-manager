import { Outlet } from 'react-router-dom';
import './home.scss';
import Sidebar from 'components/Sidebar/Sidebar';
import Header from 'components/header/Header';
// import { themeState } from 'redux/theme/themeSlice';
import { selectCurrentTheme } from 'redux/auth/auth-slice';

import { useSelector } from 'react-redux';
import PopUp from 'components/modal/PopUp';
import BoardForm from 'components/boardForm/BoardForm';

const Home = () => {
  // const theme = useSelector(themeState);
  const theme = useSelector(selectCurrentTheme);
  return (
    <div className="home">
      <Sidebar />
      <div className={`home-wrapper theme-${theme}`}>
        <Header />
        <Outlet />
        <div className={`home-content-wrapper`}>
          <p className={`home-text theme-${theme}`}>
            Before starting your project, it is essential{' '}
            <PopUp
              data={
                <span className={`home-text-link theme-${theme}`}>
                  to create a board
                </span>
              }
            >
              <BoardForm />
            </PopUp>{' '}
            to visualize and track all the necessary tasks and milestones. This
            board serves as a powerful tool to organize the workflow and ensure
            effective collaboration among team members.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
