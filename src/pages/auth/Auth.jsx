import { Navigate, useParams } from 'react-router-dom';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import ForgetPass from '../../components/forgetPass/forgetPass';
import css from './auth.module.scss';
import ResetePassword from 'components/resetePassword/resetePassword';

const Auth = () => {
  const { id } = useParams();

  return (
    <>
      <div className={css.welcomeBackground}>
        {!id && <Navigate to="/welcome" replace={true} />}
        {id === 'register' && <RegisterForm />}
        {id === 'login' && <LoginForm />}
        {id === 'forgetPassword' && <ForgetPass />}
        {id === 'resetePassword' && <ResetePassword />}
      </div>
    </>
  );
};
export default Auth;
