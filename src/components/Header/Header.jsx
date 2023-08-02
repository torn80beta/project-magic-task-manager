import './header.scss';
import { EditProfileForm } from 'components/EditProfileForm/EditProfileForm';
import PopUp from 'components/modal/PopUp';

const Header = ({ children }) => {
  return (
    <div className="header">
      {children}
      Header
      <PopUp>
        <EditProfileForm />
      </PopUp>
    </div>
  );
};

export default Header;
