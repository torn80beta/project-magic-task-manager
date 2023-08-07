import { createSlice } from '@reduxjs/toolkit';
import {
  addNewBoard,
  getBoardById,
  editBoardById,
  deleteBoardById,
  addNewColumn,
  editColumnById,
  deleteColumnById,
  addNewTask,
  editTaskById,
  deleteTaskById,
} from './workplace-operation';

const initialState = {
  board: {
    name: null,
    columns: [],
    background: null,
    icon: null,
    id: null,
  },
};

const workplaceSlice = createSlice({
  name: 'workplace',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addNewBoard.pending, state => {
        state.isLoading = true;
      })
      .addCase(addNewBoard.fulfilled, (state, action) => {
        // const { name, background, icon, _id: id } = action.payload;
        // state.board = { name, background, icon, id };

        state.board = action.payload;
        state.isLoading = false;
      })
      .addCase(getBoardById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getBoardById.fulfilled, (state, action) => {
        // const { name, background, icon, _id: id } = action.payload;
        // state.board = { name, background, icon, id };
        state.board = action.payload;
        state.isLoading = false;
      })
      .addCase(editBoardById.pending, state => {
        state.isLoading = true;
      })
      .addCase(editBoardById.fulfilled, (state, action) => {
        state.board = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteBoardById.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteBoardById.fulfilled, state => {
        state.board = {
          name: null,
          columns: [],
          background: null,
          icon: null,
          id: null,
        };
        state.isLoading = false;
      })
      .addCase(addNewColumn.pending, state => {
        state.isLoading = true;
      })
      .addCase(addNewColumn.fulfilled, (state, action) => {
        state.board.columns.push(action.payload);
        state.isLoading = false;
      })
      .addCase(editColumnById.pending, state => {
        state.isLoading = true;
      })
      .addCase(editColumnById.fulfilled, (state, action) => {
        state.board.columns.splice(
          state.board.columns.findIndex(action.payload._id),
          1,
          action.payload
        );
        state.isLoading = false;
      })
      .addCase(deleteColumnById.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteColumnById.fulfilled, (state, action) => {
        state.board.columns.splice(
          state.board.columns.findIndex(action.payload._id),
          1
        );
        state.isLoading = false;
      })
      .addCase(addNewTask.pending, state => {
        state.isLoading = true;
      })
      .addCase(addNewTask.fulfilled, (state, action) => {
        state.board.columns.push(action.payload);
        // state.board.columns[
        //   state.board.columns.findIndex(action.payload._id)
        // ].push(action.payload);
        state.isLoading = false;
      })
      .addCase(editTaskById.pending, state => {
        state.isLoading = true;
      })
      .addCase(editTaskById.fulfilled, (state, action) => {
        state.board.columns.splice(
          state.board.columns.findIndex(action.payload._id),
          1,
          action.payload
        );
        state.isLoading = false;
      })
      .addCase(deleteTaskById.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteTaskById.fulfilled, (state, action) => {
        state.board.columns.splice(
          state.board.columns.findIndex(action.payload._id),
          1
        );
        state.isLoading = false;
      });
  },
});

export const workplaceReducer = workplaceSlice.reducer;

export const selectBoard = state => state.board;

export const selectColumns = state => state.board.columns;

export const selectTasks = state => state.board.columns.tasks;
