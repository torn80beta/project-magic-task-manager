import './sidebar.scss';
import PopUp from 'components/modal/PopUp';

const Sidebar = () => {
  return (
    <div className="sidebar">
      Sidebar
      <PopUp modalName={'Create a new board'}>
        <p>Sidebar popup</p>
      </PopUp>
    </div>
  );
};

export default Sidebar;
