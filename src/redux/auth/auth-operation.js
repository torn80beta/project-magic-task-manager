import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  register,
  login,
  logout,
  getCurrent,
  editProfile,
  editAvatar,
} from 'api/api';
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
      console.log('data:', data);
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
export const editUserAvatar = createAsyncThunk(
  'users/edit',
  async (editedUser, thunkAPI) => {
    try {
      const { data } = await editAvatar(editedUser);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
