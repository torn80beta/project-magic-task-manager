import axios from 'axios';

axios.defaults.baseURL = 'https://goit-final-project.onrender.com/api';

const register = async newUser => {
  return await axios
    .post('/users/register', newUser)
    .catch(e => console.log(e.request.response));
};

const login = async ({ email, password }) => {
  return await axios
    .post('/users/login', { email, password })

    .catch(e => console.log(e.request.response));
};

const google = async user => {
  return await axios
    .post('/users/google', user)
    .catch(e => console.log(e.request.response));
};

const logout = async () => {
  return await axios
    .post('/users/logout')
    .catch(e => console.log(e.request.response));
};

const getCurrent = async () => {
  return await axios
    .get('/users/current')
    .catch(e => console.log(e.request.response));
};

const editProfile = async user => {
  return await axios
    .patch('/users/edit', user)
    .catch(e => console.log(e.request.response));
};

const editTheme = async theme => {
  return await axios
    .patch('/users/theme', { theme })
    .catch(e => console.log(e.request.response));
};
const help = async help => {
  return await axios
    .post('/users/help', help)
    .catch(e => console.log(e.request.response));
};

const forgetPass = async email => {
  return await axios
    .post('/users/forgetpassword', email)
    .catch(e => console.log(e.request.response));
};

const resetPass = async ({ user, verificationToken }) => {
  console.log(user, 1);
  return await axios
    .post(`/users/resetpassword/${verificationToken}`, user)
    .catch(e => console.log(e.request.response));
};

export {
  register,
  login,
  logout,
  getCurrent,
  editProfile,
  editTheme,
  help,
  google,
  forgetPass,
  resetPass,
};
