// import NeedHelpForm from 'components/needHelpForm/NeedHelpForm';
// import { themeState } from 'redux/theme/themeSlice';
import { useSelector } from 'react-redux';
import PopUp from 'components/modal/PopUp';
import BoardForm from 'components/boardForm/BoardForm';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/auth-operation';
import './sidebar.scss';
import Icon from '../icon/Icon';
import { NavLink } from 'react-router-dom';
import cactusIcon from './img/icons/cactus_2.png';
import { useEffect, useState } from 'react';
import NeedHelpForm from 'components/needHelpForm/NeedHelpForm';
import { selectCurrentTheme } from 'redux/auth/auth-slice';

const boardArray = [
  { title: 'To Do List', id: 1, current: false },
  { title: 'Home', id: 2, current: false },
  { title: 'Family', id: 3, current: false },
  { title: 'Garden tree', id: 4, current: true },
  { title: 'Project', id: 5, current: false },
  { title: 'English', id: 6, current: false },
  { title: 'Shopping', id: 7, current: false },
];

const Sidebar = () => {
  const currentTheme = useSelector(selectCurrentTheme);
  const [currentBoardTitle, setCurrentBoard] = useState('');
  const [currentLink, setCurrentLink] = useState(
    currentBoardTitle.toLowerCase().split(' ').join('-')
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const findBoard = boardArray.find(item => item.current);
    setCurrentBoard(findBoard.title);
    setCurrentLink(currentBoardTitle.toLowerCase().split(' ').join('-'));
  }, [currentBoardTitle]);

  const changeBoard = e => {
    console.log(e);
  };
  return (
    <div className={`sidebar theme-${currentTheme}`}>
      <div className={`logoWrapper theme-${currentTheme}`}>
        <span className={`sidebar_logoIcon theme-${currentTheme}`}>
          <Icon id={'logo'} width={16} height={20} />
        </span>
        <h1 className={`logoName theme-${currentTheme}`}>Task Pro</h1>
      </div>

      <div className={`customAdviseWrapper theme-${currentTheme}`}>
        <h3 className={`customAdvise theme-${currentTheme}`}>My boards</h3>

        <PopUp
          data={
            <span className={`createBoard theme-${currentTheme}`}>
              <span className={`createBoardText theme-${currentTheme}`}>
                Create a new board
              </span>
              <span className={`createBoardButton theme-${currentTheme}`}>
                <Icon id={'plus'} width={20} height={20} />
              </span>
            </span>
          }
        >
          <BoardForm />
        </PopUp>
      </div>

      <div className={`projects-wrapper theme-${currentTheme}`}>
        <ul className="projectsList">
          {boardArray.map(item =>
            !item.current ? (
              <li key={item.id}>
                <NavLink
                  onClick={changeBoard}
                  to={item.title.toLowerCase().split(' ').join('-')}
                  className={`projectsLinks theme-${currentTheme}`}
                >
                  <Icon id={'puzzle-piece'} width={16} height={16} />

                  <h2 className={`projectsName theme-${currentTheme}`}>
                    {item.title}
                  </h2>
                </NavLink>
              </li>
            ) : (
              <li
                key={item.id}
                className={`currentProject theme-${currentTheme}`}
              >
                <NavLink
                  to={currentLink}
                  className={`currentBoardLink theme-${currentTheme}`}
                >
                  <Icon id={'four-circles'} width={18} height={18} />

                  <h2 className={`currentProjectName theme-${currentTheme}`}>
                    {currentBoardTitle}
                  </h2>
                </NavLink>
                <div className={`tools-wrapper theme-${currentTheme}`}>
                  <div className={`toolsIcons theme-${currentTheme}`}>
                    <PopUp data={<Icon id={'pencil'} width={16} height={16} />}>
                      <BoardForm />
                    </PopUp>

                    <Icon id={'trash'} width={16} height={16} />
                  </div>
                  <div className={`board-marker theme-${currentTheme}`}></div>
                </div>
              </li>
            )
          )}
        </ul>
        {/* </div> */}
      </div>

      <div className={`helpInsideWrapper theme-${currentTheme}`}>
        <div>
          <img
            src={cactusIcon}
            alt="cactusimg"
            width="54"
            height="78"
            className="cactusIcon"
          />
        </div>

        <p className={`helpTextSidebar theme-${currentTheme}`}>
          If you need help with{' '}
          <span className={`taskProWord theme-${currentTheme}`}>TaskPro</span>,
          check out our support resources or reach out to our customer support
          team.
        </p>
        <PopUp
          data={
            <span className={`helpCircleWrapper theme-${currentTheme}`}>
              <Icon id={'help-circle'} width={20} height={20} />

              <span className={`needHelpText theme-${currentTheme}`}>
                Need help?
              </span>
            </span>
          }
        >
          <NeedHelpForm />
        </PopUp>
      </div>
      <div className={`logOutWrapper theme-${currentTheme}`}>
        <button
          type="button"
          onClick={() => dispatch(logoutUser())}
          className={`logOutButton theme-${currentTheme}`}
        >
          <span className={`logOutIcon theme-${currentTheme}`}>
            <Icon id={'log-out'} width={32} height={32} />
          </span>
          <span className={`logOutText theme-${currentTheme}`}>Log out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
