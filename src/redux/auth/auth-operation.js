import { createAsyncThunk } from '@reduxjs/toolkit';
import {
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
} from 'api/auth';
import axios from 'axios';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUser = createAsyncThunk(
  'users/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await register(credentials);
      token.set(data.token);
      return data;
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
      token.set(data.token);
      // console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const Google = createAsyncThunk(
  'users/google',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await google(credentials);
      token.set(data.token);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'users/logout',
  async (_, thunkAPI) => {
    try {
      await logout();
      token.unset();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'users/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      token.set(persistedToken);
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
