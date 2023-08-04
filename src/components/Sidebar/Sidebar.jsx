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
  return (
    <div className="sidebarBackdrop">
      <div className="sidebar">
        <div className="logoWrapp">
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

        <div className="backGround">
          <NavLink className="backGroudWrapper">
            <div className="projectNameWrapper">
              <ProjectIcon className="projectIcon" />
              <h2 className="projectName">Project office</h2>
            </div>
            <div className="prodject">
              <PencilIcon className="pencilIcon" />
              <TrashIcon className="trashIcon" />
            </div>
          </NavLink>
        </div>
        <div className="BackSidebarWrapper">
          <div className="helpWrapper">
            <div className="helpIsideWrapper">
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
                If you need help with
                <span className="taskProWord"> TaskPro </span>, check out our
                support resources or reach out to our customer support team.
              </p>

              <div className="helpCircleWrapper">
                <HelpCircleIcon className="helpCircleIcon" />
                <h3 className="needHelpText">Need help?</h3>
              </div>
            </div>
          </div>
          <div className='buttonWrapper'>
            <button type="button" className="logOutButton">
              <LogOutIcon className="logOutIcon" />
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
