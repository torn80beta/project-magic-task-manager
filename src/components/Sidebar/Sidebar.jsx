import { useSelector, useDispatch } from 'react-redux';
import PopUp from 'components/modal/PopUp';
import BoardForm from 'components/boardForm/BoardForm';
import { logoutUser } from 'redux/auth/auth-operation';
import './sidebar.scss';
import Icon from '../icon/Icon';
import { NavLink, useNavigate } from 'react-router-dom';
import cactusIcon from './img/icons/cactus_2.png';
import NeedHelpForm from 'components/needHelpForm/NeedHelpForm';
import { selectCurrentTheme } from 'redux/auth/auth-slice';
import { changeFilter } from 'redux/filter/filterSlice';
import {
  selectAllBoards,
  selectCurrentBoard,
} from 'redux/workplace/workplace-slice';
import {
  // getAllBoards,
  getBoardById,
  deleteBoardById,
} from 'redux/workplace/workplace-operation';
import toast, { Toaster } from 'react-hot-toast';

const Sidebar = () => {
  const boardArray = useSelector(selectAllBoards).toReversed();
  const currentBoard = useSelector(selectCurrentBoard);
  const currentTheme = useSelector(selectCurrentTheme);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notify = () => toast('You can not delete board with existing columns.');
  const onBoardChange = id => {
    dispatch(changeFilter('all'));
    dispatch(getBoardById(id));
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
          {boardArray.map(item => (
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
                  <PopUp data={<Icon id={'pencil'} width={16} height={16} />}>
                    <BoardForm boardId={item._id} boardTitle={item.name} />
                  </PopUp>
                  <button
                    className={`boardDeleteButton theme-${currentTheme} `}
                    onClick={() => {
                      if (
                        item._id === currentBoard._id &&
                        currentBoard.columns.length
                      ) {
                        notify();
                        return;
                      }
                      dispatch(deleteBoardById(item._id));
                      navigate('/');
                    }}
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
      <Toaster
        toastOptions={{
          className: '',
          style: {
            border: '1px solid red',
            padding: '16px',
            color: 'red',
          },
        }}
      />
    </div>
  );
};

export default Sidebar;
