import { Outlet, useParams } from 'react-router-dom';
import './home.scss';
import Sidebar from 'components/Sidebar/Sidebar';
import Header from 'components/header/Header';
import { selectCurrentTheme } from 'redux/auth/auth-slice';
import { useDispatch, useSelector } from 'react-redux';
import PopUp from 'components/modal/PopUp';
import BoardForm from 'components/boardForm/BoardForm';
import { Suspense, useEffect } from 'react';
import Loader from 'components/loader/Loader';
import { getAllBoards } from 'redux/workplace/workplace-operation';

const Home = () => {
  const theme = useSelector(selectCurrentTheme);
  const shouldRenderHomePage =
    Object.keys(useParams()).length > 0 ? false : true;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBoards());
  }, [dispatch]);

  return (
    <div className="home">
      <Sidebar />
      <div className={`home-wrapper theme-${theme}`}>
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>

        {shouldRenderHomePage && (
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
              to visualize and track all the necessary tasks and milestones.
              This board serves as a powerful tool to organize the workflow and
              ensure effective collaboration among team members.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
