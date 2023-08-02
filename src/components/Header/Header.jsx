import './header.scss';
import PopUp from 'components/modal/PopUp';

const Header = ({ children }) => {
  return (
    <div className="header">
      {children}
      Header
      <PopUp>
        <p>Header popup</p>
      </PopUp>
    </div>
  );
};

export default Header;
