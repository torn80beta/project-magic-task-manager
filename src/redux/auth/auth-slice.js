import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logoutUser,
  editUserData,
  getCurrentUser,
} from './auth-operation';

const initialState = {
  user: { name: null, email: null, avatar: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(getCurrentUser.pending, state => {
        state.isLoading = true;
        state.isRefreshing = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(getCurrentUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(logoutUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.user = { name: null, email: null, avatar: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(editUserData.pending, state => {
        state.isLoading = true;
      })
      .addCase(editUserData.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user.name;
export const selectUserEmail = state => state.auth.user.email;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectToken = state => state.auth.token;
export const selectUserAvatar = state => state.auth.user.avatar;
export const selectIsLoading = state => state.auth.isLoading;
