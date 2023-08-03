import axios from 'axios';

axios.defaults.baseURL = 'https://goit-final-project.onrender.com/api';

const register = async newUser => {
  return await axios
    .post('/users/register', newUser)
    .catch(e => console.log(e.request.response));
};

const login = async user => {
  return await axios
    .post('/users/login', user)
    .catch(e => console.log(e.request.response));
};

const logout = async user => {
  return await axios
    .post('/users/logout')
    .catch(e => console.log(e.request.response));
};

const getCurrent = async () => {
  return await axios
    .get('/users/current')
    .catch(e => console.log(e.request.response));
};

const editAvatar = async avatar => {
  const formData = new FormData();
  formData.append('avatar', avatar);

  return await axios
    .patch('/users/edit', formData)
    .catch(e => console.log(e.request.response));
};

const editProfile = async user => {
  return await axios
    .patch('/users/avatars', user)
    .catch(e => console.log(e.request.response));
};

export { register, login, logout, getCurrent, editProfile, editAvatar };
