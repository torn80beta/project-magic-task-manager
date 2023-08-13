import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  register,
  login,
  logout,
  getCurrent,
  editProfile,
  editTheme,
  help,
  // google,
  forgetPass,
  resetPass,
} from 'api/auth';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/api',
  // headers: {
  //   'Cache-Control': 'no-cache',
  //   Pragma: 'no-cache',
  //   Expires: '0',
  // },
});

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

const setToken = token => {
  if (token) {
    return (axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`);
  }
  axiosInstance.defaults.headers.common.Authorization = '';
};

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      console.log('INTERCEPTION');
      const refreshToken = JSON.parse(localStorage.getItem('refreshToken'));
      // console.log(refreshToken);
      console.log('refreshToken: ' + refreshToken);
      // setToken();
      // console.log(
      //   'TOKEN UNSET: ' + axiosInstance.defaults.headers.common.Authorization
      // );
      try {
        const { data } = await axiosInstance.post('/users/refresh', {
          refreshToken,
        });
        console.log('refreshed accessToken: ' + data.accessToken);
        // localStorage.setItem('accessToken', JSON.stringify(data.accessToken));
        setToken(data.accessToken);
        console.log(
          'settled accessToken: ' +
            axiosInstance.defaults.headers.common.Authorization
        );
        // console.log(typeof data.refreshToken);
        localStorage.setItem('refreshToken', JSON.stringify(data.refreshToken));
        console.log(error.config.headers.common.authorization);
        // axiosInstance(
        error.config.headers.common.authorization = `Bearer ${data.accessToken}`;
        // );
        return axiosInstance(error.config);
        // return axiosInstance(
        //   (error.config.headers.common.authorization = `Bearer ${data.accessToken}`)
        // );
      } catch (error) {
        // console.log(error);
        return Promise.reject(error);
      }
      // }
    }
    console.log('exit');
    return Promise.reject(error);
  }
);

export const registerUser = createAsyncThunk(
  'users/register',
  async (credentials, thunkAPI) => {
    try {
      const { status } = await register(credentials);
      if (status === 201) {
        const { data } = await login(credentials);
        // localStorage.setItem('refreshToken', JSON.stringify(data.refreshToken));
        // setToken(data.accessToken);
        return data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'users/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await login(credentials);
      // console.log(typeof data.refreshToken);
      localStorage.setItem('refreshToken', JSON.stringify(data.refreshToken));
      // localStorage.setItem('accessToken', JSON.stringify(data.accessToken));
      setToken(data.accessToken);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'users/logout',
  async (_, thunkAPI) => {
    try {
      await logout();
      setToken();
      console.log(
        'TOKEN UNSET: ' + axiosInstance.defaults.headers.common.Authorization
      );
      localStorage.removeItem('refreshToken');
      // localStorage.removeItem('accessToken');
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  // 'users/refresh',
  'users/current',
  async (_, thunkAPI) => {
    // const state = thunkAPI.getState();
    // const persistedToken = state.auth.accessToken;
    // if (persistedToken === null) {
    //   return thunkAPI.rejectWithValue('Unable to fetch user');
    // }
    // const accessToken = localStorage.getItem('accessToken');
    // token.set(accessToken);
    try {
      // token.set(persistedToken);
      const { data } = await getCurrent();
      // console.log('Current user: ');
      // localStorage.setItem('refreshToken', JSON.stringify(data.refreshToken));
      // token.set(data.accessToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editUserData = createAsyncThunk(
  'users/edit',
  async (editedUser, thunkAPI) => {
    // const accessToken = JSON.parse(localStorage.getItem('accessToken'));
    // token.set(accessToken);
    try {
      const { data } = await editProfile(editedUser);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editUserTheme = createAsyncThunk(
  'users/theme',
  async (theme, thunkAPI) => {
    // const accessToken = JSON.parse(localStorage.getItem('accessToken'));
    // token.set(accessToken);
    try {
      const { data } = await editTheme(theme);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const needHelp = createAsyncThunk(
  'users/help',
  async (request, thunkAPI) => {
    try {
      const { data } = await help(request);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const forgetPassword = createAsyncThunk(
  'users/forgetpassword',
  async (request, thunkAPI) => {
    try {
      const { data } = await forgetPass(request);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  'users/resetpassword',
  async (request, thunkAPI) => {
    try {
      const { data } = await resetPass(request);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default axiosInstance;
