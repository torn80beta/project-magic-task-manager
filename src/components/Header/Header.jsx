import './header.scss';
import PopUp from 'components/modal/PopUp';
import { EditProfileForm } from 'components/EditProfileForm/EditProfileForm';

const Header = ({ children }) => {
  return (
    <div className="header">
      {children}
      Header
      <PopUp>
        {/* <p>Header popup</p> */}
        <EditProfileForm />
      </PopUp>
    </div>
  );
};

export default Header;
