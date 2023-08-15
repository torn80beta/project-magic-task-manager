import './userInfo.scss';
import PopUp from 'components/modal/PopUp';
import { EditProfileForm } from 'components/EditProfileForm/EditProfileForm';
import Icon from 'components/icon/Icon';

const UserInfo = ({ theme, user }) => {
  return (
    <PopUp
      theme={theme}
      data={
        <div className="user-info">
          <p className="user-name">{user.name}</p>{' '}
          {user.avatar ? (
            <img
              className="user-avatar"
              alt="Avatar"
              src={user.avatar}
              width={32}
              height={32}
            />
          ) : (
            <div className={`avatar theme-${theme}`}>
              <Icon id="avatar" width={32} height={32} />
            </div>
          )}
        </div>
      }
      ariaLabel={'User info'}
    >
      <EditProfileForm />
    </PopUp>
  );
};

export default UserInfo;
