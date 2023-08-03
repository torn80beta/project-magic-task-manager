import './userInfo.scss';
import PopUp from 'components/modal/PopUp';
import { EditProfileForm } from 'components/EditProfileForm/EditProfileForm';

const UserInfo = ({ theme, user }) => {
  return (
    <div className="userInfo">
      <p className="userName">{user.name}</p>
      <PopUp
        theme={theme}
        modalName={<img alt="IMG" src={user.avatar} width={32} height={32} />}
      >
        <EditProfileForm />
      </PopUp>
    </div>
  );
};

export default UserInfo;
