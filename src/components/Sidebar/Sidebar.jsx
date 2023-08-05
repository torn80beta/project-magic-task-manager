// import NeedHelpForm from 'components/needHelpForm/NeedHelpForm';
// import PopUp from 'components/modal/PopUp';
import { themeState } from 'redux/theme/themeSlice';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// import BoardForm from 'components/boardForm/BoardForm';
// import { logoutUser } from 'redux/auth/auth-operation';
import './sidebar.scss';
import { ReactComponent as LogoIcon } from './img/icons/logo-icon.svg';
import { ReactComponent as ProjectIcon } from './img/icons/project.svg';
import { HiPlus } from 'react-icons/hi';
import { ReactComponent as PencilIcon } from './img/icons/pencil-01.svg';
import { ReactComponent as TrashIcon } from './img/icons/trash-04.svg';
import { NavLink } from 'react-router-dom';
import cactusIcon from './img/icons/cactus_2.png';
import { ReactComponent as HelpCircleIcon } from './img/icons/help-circle.svg';
import { ReactComponent as LogOutIcon } from './img/icons/logout.svg';

const Sidebar = () => {
  const currentTheme = useSelector(themeState);
//   const dispatch = useDispatch();

  return (
    <div className={`sidebar theme-${currentTheme}`}>
      <div className="logoWrapper">
        <LogoIcon className="logoIcon" />
        <h1 className="logoName">Task Pro</h1>
      </div>

      <div className="customAdviseWrapper">
        <h3 className="customAdvise">My boards</h3>

        <div className="createBoard">
          <h2 className="createBoardText">Create a new board</h2>
          <button type="button" className="createBoardButton">
            <HiPlus />
          </button>
        </div>
      </div>

      <div className="projects-wrapper">
        <div className="boardLinkWrapper">
          <NavLink className="boardLink">
            <ProjectIcon className="projectIcon" />
            <h2 className="projectName">Project office</h2>
          </NavLink>
          <div className="tools-wrapper">
            <div className="toolsIcons">
              <PencilIcon className="pencilIcon" />
              <TrashIcon className="trashIcon" />
            </div>
            <div className="board-marker"></div>
          </div>
        </div>

        <div className="boardLinkWrapper">
          <NavLink className="boardLink">
            <ProjectIcon className="projectIcon" />
            <h2 className="projectName">Neon Light Project</h2>
          </NavLink>
          <div className="tools-wrapper">
            <div className="toolsIcons">
              <PencilIcon className="pencilIcon" />
              <TrashIcon className="trashIcon" />
            </div>
            <div className="board-marker"></div>
          </div>
        </div>
      </div>

      <div className="backSidebarWrapper">
        <div className="helpInsideWrapper">
          <div>
            <img
              src={cactusIcon}
              alt="cactusimg"
              width="54"
              height="78"
              className="cactusIcon"
            />
          </div>

          <p className="helpTextSidebar">
            If you need help with <span className="taskProWord">TaskPro</span>,
            check out our support resources or reach out to our customer support
            team.
          </p>

          <div className="helpCircleWrapper">
            <HelpCircleIcon className="helpCircleIcon" />
            <h3 className="needHelpText">Need help?</h3>
          </div>
        </div>
        <div className="logOutWrapper">
          <button type="button" className="logOutButton">
            <LogOutIcon className="logOutIcon" />
            Log out
          </button>
        </div>
      </div>

      {/* <PopUp data={'Create a new board'}>
        <BoardForm />
      </PopUp>
      <PopUp data={'Need help'}>
        <NeedHelpForm />
      </PopUp>
      <button type="button" onClick={() => dispatch(logoutUser())}>
        Logout
      </button> */}
    </div>
  );
};

export default Sidebar;
