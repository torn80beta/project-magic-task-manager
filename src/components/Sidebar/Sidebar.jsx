import NeedHelpForm from 'components/needHelpForm/NeedHelpForm';
import './sidebar.scss';
import PopUp from 'components/modal/PopUp';
import { themeState } from 'redux/theme/themeSlice';
import { useSelector, useDispatch } from 'react-redux';
import BoardForm from 'components/boardForm/BoardForm';
import { logoutUser } from 'redux/auth/auth-operation';

const Sidebar = () => {
  const currentTheme = useSelector(themeState);
  const dispatch = useDispatch();

  return (
    <div className={`sidebar theme-${currentTheme}`}>
      Sidebar
      <PopUp data={'Create a new board'}>
        <BoardForm />
        {/* <p>Sidebar popup</p> */}
      </PopUp>
      <PopUp data={'Need help'}>
        <NeedHelpForm />
      </PopUp>
      <button type="button" onClick={() => dispatch(logoutUser())}>
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
