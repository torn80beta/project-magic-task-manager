import NeedHelpForm from 'components/needHelpForm/NeedHelpForm';
import './sidebar.scss';
import PopUp from 'components/modal/PopUp';
import { themeState } from 'redux/theme/themeSlice';
import { useSelector } from 'react-redux';
import BoardForm from 'components/boardForm/BoardForm';

const Sidebar = () => {
  const currentTheme = useSelector(themeState);

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
    </div>
  );
};

export default Sidebar;
