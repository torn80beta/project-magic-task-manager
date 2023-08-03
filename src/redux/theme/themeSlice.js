import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'violet',
  reducers: {
    changeTheme: (state, action) => (state = action.payload),
  },
});

export const { changeTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
export const themeState = state => state.theme;
