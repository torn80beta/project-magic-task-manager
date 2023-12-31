import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logoutUser,
  editUserData,
  getCurrentUser,
  editUserTheme,
} from './auth-operation';

const initialState = {
  user: { name: null, email: null, avatar: null },
  theme: 'violet',
  accessToken: null,
  refreshToken: null,
  boards: null,
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // setToken: (state, action) => {
    //   console.log(action.payload);
    //   state.accessToken = action.payload;
    // axios.defaults.headers.common.Authorization = `Bearer ${action.payload.accessToken}`;
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        // state.accessToken = action.payload.token;
        // state.refreshToken = action.payload.refreshToken;
        state.boards = action.payload.boards;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, state => {
        state.isLoading = false;
      })
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        // state.accessToken = action.payload.accessToken;
        // state.refreshToken = action.payload.refreshToken;
        state.theme = action.payload.theme;
        state.boards = action.payload.boards;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, state => {
        state.isLoading = false;
        state.isLoggedIn = false;
      })
      .addCase(getCurrentUser.pending, state => {
        state.isLoading = true;
        state.isRefreshing = true;
        state.isLoggedIn = false;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        // state.accessToken = action.payload.accessToken;
        // state.refreshToken = action.payload.refreshToken;
        state.theme = action.payload.theme;
        state.boards = action.payload.boards;
        state.isLoading = false;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(getCurrentUser.rejected, state => {
        state.isRefreshing = false;
        state.isLoading = false;
        state.isLoggedIn = false;
      })
      .addCase(logoutUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.user = { name: null, email: null, avatar: null };
        state.theme = 'violet';
        state.boards = [];
        // state.accessToken = null;
        // state.refreshToken = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(logoutUser.rejected, state => {
        state.isLoading = false;
      })
      .addCase(editUserData.pending, state => {
        state.isLoading = true;
      })
      .addCase(editUserData.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(editUserData.rejected, state => {
        state.isLoading = false;
      })
      .addCase(editUserTheme.pending, state => {
        state.isLoading = true;
      })
      .addCase(editUserTheme.fulfilled, (state, action) => {
        state.theme = action.payload.theme;
        state.isLoading = false;
      })
      .addCase(editUserTheme.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user.name;
export const selectUserEmail = state => state.auth.user.email;
export const selectCurrentUserBoards = state => state.auth.boards;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectToken = state => state.auth.accessToken;
export const selectUserAvatar = state => state.auth.user.avatar;
export const selectIsLoading = state => state.auth.isLoading;
export const selectCurrentTheme = state => state.auth.theme;
// export const { setToken } = authSlice.actions;
