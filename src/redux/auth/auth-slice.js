import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logoutUser,
  editUser,
  getCurrentUser,
} from './auth-operation';

const initialState = {
  user: { name: null, email: null, avatar: null },
  token: null,
  isLoggedIn: false,
  // isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      // .addCase(getCurrentUser.pending, state => {
      //   state.isRefreshing = true;
      // })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        // state.isLoggedIn = true;
        // state.isRefreshing = false;
      })
      // .addCase(getCurrentUser.rejected, state => {
      //   state.isRefreshing = false;
      // })
      .addCase(logoutUser.fulfilled, state => {
        state.user = { name: null, email: null, avatar: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = null;
        state.isLoggedIn = true;
      });
  },
});

export const authReducer = authSlice.reducer;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user.name;
// export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectToken = state => state.auth.token;
export const selectUserAvatar = state => state.auth.user.avatar;
