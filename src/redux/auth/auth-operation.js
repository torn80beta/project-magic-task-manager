import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  register,
  login,
  logout,
  getCurrent,
  editProfile,
  editTheme,
  help,
  forgetPass,
  resetPass,
} from 'api/auth';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://goit-final-project.onrender.com/api',
  // baseURL: 'http://localhost:3001/api',
  // timeout: 1000,
});

export const setToken = token => {
  if (token) {
    return (axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`);
  }
  axiosInstance.defaults.headers.common.Authorization = '';
};

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      const refreshToken = JSON.parse(localStorage.getItem('refreshToken'));
      const sessionId = JSON.parse(localStorage.getItem('sessionId'));

      try {
        const { data } = await axiosInstance.post('/users/refresh', {
          refreshToken,
          sid: sessionId,
        });
        setToken(data.accessToken);
        localStorage.setItem('refreshToken', JSON.stringify(data.refreshToken));
        localStorage.setItem('sessionId', JSON.stringify(data.sid));
        const { config } = error;
        config.headers.Authorization = `Bearer ${data.accessToken}`;
        return axiosInstance(config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
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
        localStorage.setItem('refreshToken', JSON.stringify(data.refreshToken));
        localStorage.setItem('sessionId', JSON.stringify(data.sid));
        setToken(data.accessToken);
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
      localStorage.setItem('refreshToken', JSON.stringify(data.refreshToken));
      localStorage.setItem('sessionId', JSON.stringify(data.sid));
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
      localStorage.removeItem('refreshToken');
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'users/current',
  async (_, thunkAPI) => {
    try {
      const { data } = await getCurrent();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editUserData = createAsyncThunk(
  'users/edit',
  async (editedUser, thunkAPI) => {
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
