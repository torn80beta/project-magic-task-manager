import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  // initialState: 'empty',
  initialState: 'all',
  reducers: {
    changeFilter: (state, action) => (state = action.payload),
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const filterState = state => state.filter;
