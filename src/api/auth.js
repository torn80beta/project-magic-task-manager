import axiosInstance from 'redux/auth/auth-operation';

const register = async newUser => {
  return await axiosInstance
    .post('/users/register', newUser)
    .catch(e => e.request.response);
};

const login = async ({ email, password }) => {
  return await axiosInstance
    .post('/users/login', { email, password })

    .catch(e => e.request.response);
};

const logout = async () => {
  return await axiosInstance
    .post('/users/logout')
    .catch(e => e.request.response);
};

const getCurrent = async () => {
  return await axiosInstance
    .get('/users/current')
    .catch(e => e.request.response);
};

const editProfile = async user => {
  return await axiosInstance
    .patch('/users/edit', user)
    .catch(e => e.request.response);
};

const editTheme = async theme => {
  return await axiosInstance
    .patch('/users/theme', { theme })
    .catch(e => e.request.response);
};
const help = async help => {
  return await axiosInstance
    .post('/users/help', help)
    .catch(e => e.request.response);
};

const forgetPass = async email => {
  return await axiosInstance
    .post('/users/forgetpassword', email)
    .catch(e => e.request.response);
};

const resetPass = async ({ user, verificationToken }) => {
  console.log(user, 1);
  return await axiosInstance
    .post(`/users/resetpassword/${verificationToken}`, user)
    .catch(e => e.request.response);
};

export {
  register,
  login,
  logout,
  getCurrent,
  editProfile,
  editTheme,
  help,
  forgetPass,
  resetPass,
};
