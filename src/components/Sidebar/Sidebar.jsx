import { useSelector, useDispatch } from 'react-redux';
import PopUp from 'components/modal/PopUp';
import BoardForm from 'components/boardForm/BoardForm';
import { logoutUser } from 'redux/auth/auth-operation';
import './sidebar.scss';
import Icon from '../icon/Icon';
import { NavLink } from 'react-router-dom';
import cactusIcon from './img/icons/cactus_2.png';
import { useEffect, useState } from 'react';
import NeedHelpForm from 'components/needHelpForm/NeedHelpForm';
import {
  selectCurrentTheme,
  selectCurrentUserBoards,
} from 'redux/auth/auth-slice';
import { changeFilter } from 'redux/filter/filterSlice';
import { deleteBoardById } from 'redux/workplace/workplace-operation';
import { getBoardById } from 'redux/workplace/workplace-operation';

const Sidebar = () => {
  const selectedBoards = useSelector(selectCurrentUserBoards);
  const [boardsList, setBoardList] = useState(selectedBoards);
  const currentTheme = useSelector(selectCurrentTheme);
  const dispatch = useDispatch();

  const onAnotherBoard = boardId => {
    dispatch(changeFilter('all'));
    dispatch(getBoardById(boardId));
  };
  const onDeleteButton = boardId => {
    dispatch(deleteBoardById(boardId));
  };

  useEffect(() => {
    setBoardList(selectedBoards);
  }, [selectedBoards, boardsList]);

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
          {boardsList &&
            boardsList.map(item => (
              <li
                key={item._id}
                className={`projectsListItem theme-${currentTheme}`}
              >
                <NavLink
                  to={`/${item._id}`}
                  className={`projectsLinks theme-${currentTheme}`}
                  onClick={onAnotherBoard(item._id)}
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
                      onClick={() => onDeleteButton(item._id)}
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
    </div>
  );
};

export default Sidebar;
