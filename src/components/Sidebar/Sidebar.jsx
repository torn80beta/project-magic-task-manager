import './sidebar.scss';
import { ReactComponent as LogoIcon } from './img/icons/logo-icon.svg';
import { ReactComponent as Project } from './img/icons/Project.svg';
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
        </div>

        <div className="createBoard">
          <div className="createBoardTextWrapper">
            <h2 className="createBoardText">Create a new board</h2>
          </div>

          <div className="createBoardPlus">
            <button>plus</button>
          </div>
        </div>

        <div className="backGround">
          <Project className="projectIcon" />
          <h2 className="projectName">Project office</h2>
        </div>

        <div className="blockSidebar">
          {/* <Assets className ="assetsIcon "/> */}

          <p className='taskSidebar'>
            If you need help with <span className ='taskProSidebar'>TaskPro </span>, check out our support resources or
            reach out to our customer support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
