import { useSelector, useDispatch } from 'react-redux';
import PopUp from 'components/modal/PopUp';
import BoardForm from 'components/boardForm/BoardForm';
import { logoutUser } from 'redux/auth/auth-operation';
import './sidebar.scss';
import Icon from '../icon/Icon';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import cactusIcon from './img/icons/cactus_2.png';
import NeedHelpForm from 'components/needHelpForm/NeedHelpForm';
import { selectCurrentTheme } from 'redux/auth/auth-slice';
import { changeFilter } from 'redux/filter/filterSlice';
import {
  selectAllBoards,
  selectCurrentBoard,
} from 'redux/workplace/workplace-slice';
import { deleteBoardById } from 'redux/workplace/workplace-operation';
import { toast } from 'react-toastify';

const Sidebar = ({ closeModal }) => {
  const boardArray = useSelector(selectAllBoards).toReversed();
  const currentBoard = useSelector(selectCurrentBoard);
  const currentTheme = useSelector(selectCurrentTheme);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onBoardChange = id => {
    dispatch(changeFilter('all'));
    if (closeModal) {
      closeModal();
    }
  };

  const onDeleteButton = boardId => {
    if (boardId === currentBoard._id && currentBoard.columns.length) {
      toast.error('The board must be empty');
      return;
    }
    dispatch(deleteBoardById(boardId));
    navigate('/');
  };

  return (
    <div className={`sidebar theme-${currentTheme}`}>
      <Link to="/" className={`logoWrapper theme-${currentTheme}`}>
        <span className={`sidebar_logoIcon theme-${currentTheme}`}>
          <Icon id={'logo'} width={16} height={20} />
        </span>
        <h1 className={`logoName theme-${currentTheme}`}>Task Pro</h1>
      </Link>

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
          ariaLabel={'Create a new board'}
        >
          <BoardForm />
        </PopUp>
      </div>

      <div className={`projects-wrapper theme-${currentTheme}`}>
        <ul className="projectsList">
          {boardArray &&
            boardArray.map(item => (
              <li
                key={item._id}
                className={`projectsListItem theme-${currentTheme}`}
              >
                <NavLink
                  to={`/${item._id}`}
                  className={`projectsLinks theme-${currentTheme}`}
                  onClick={() => {
                    onBoardChange(item._id);
                  }}
                >
                  <Icon id={item.icon} width={18} height={18} />

                  <h2 className={`projectsName theme-${currentTheme}`}>
                    {item.name}
                  </h2>
                </NavLink>
                <div className={`tools-wrapper theme-${currentTheme}`}>
                  <div className={`toolsIcons theme-${currentTheme}`}>
                    <PopUp
                      data={<Icon id={'pencil'} width={16} height={16} />}
                      ariaLabel={'Edit board'}
                    >
                      <BoardForm boardId={item._id} boardTitle={item.name} />
                    </PopUp>
                    <button
                      className={`boardDeleteButton theme-${currentTheme} `}
                      onClick={() => onDeleteButton(item._id)}
                      aria-label="Delete board"
                    >
                      <Icon id={'trash'} width={16} height={16} />
                    </button>
                  </div>
                  <div className={`board-marker theme-${currentTheme}`}></div>
                </div>
              </li>
            ))}
        </ul>
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
          <Link to="/" className={`taskProWord theme-${currentTheme}`}>
            TaskPro
          </Link>
          , check out our support resources or reach out to our customer support
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
          ariaLabel={'Help'}
        >
          <NeedHelpForm />
        </PopUp>
      </div>
      <div className={`logOutWrapper theme-${currentTheme}`}>
        <button
          type="button"
          onClick={() => dispatch(logoutUser())}
          className={`logOutButton theme-${currentTheme}`}
          aria-label="Log out"
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
