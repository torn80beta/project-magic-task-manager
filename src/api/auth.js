import axios from 'axios';

axios.defaults.baseURL = 'https://goit-final-project.onrender.com/api/users';

const register = async newUser => {
  return await axios
    .post('/register', newUser)
    .catch(e => console.log(e.request.response));
};

const login = async user => {
  return await axios
    .post('/login', user)
    .catch(e => console.log(e.request.response));
};

const logout = async user => {
  return await axios
    .post('/logout')
    .catch(e => console.log(e.request.response));
};

const getCurrent = async () => {
  return await axios
    .get('/current')
    .catch(e => console.log(e.request.response));
};

const editProfile = async user => {
  return await axios
    .patch('/edit', user)
    .catch(e => console.log(e.request.response));
};

export { register, login, logout, getCurrent, editProfile };
