import { useParams } from 'react-router-dom';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import css from './auth.module.scss';

const Auth = () => {
  const { id } = useParams();

  return (
    <>
      <div className={css.welcomeBackground}>
        {id === 'register' && <RegisterForm />}
        {id === 'login' && <LoginForm />}
      </div>
    </>
  );
};
export default Auth;
