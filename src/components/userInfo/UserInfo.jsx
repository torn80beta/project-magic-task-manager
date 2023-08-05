import './userInfo.scss';
import PopUp from 'components/modal/PopUp';
import { EditProfileForm } from 'components/EditProfileForm/EditProfileForm';

const UserInfo = ({ theme, user }) => {
  return (
    <PopUp
      theme={theme}
      data={
        <div className="userInfo">
          <p className="userName">{user.name}</p>{' '}
          <img alt="IMG" src={user.avatar} width={32} height={32} />
        </div>
      }
    >
      <EditProfileForm />
    </PopUp>
  );
};

export default UserInfo;
