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
  getAllBoards,
  dragTaskById,
} from './workplace-operation';

const initialState = {
  boardsList: [],
  currentBoard: {
    name: null,
    columns: [],
    background: null,
    icon: null,
    id: null,
  },
  isLoading: false,
};

const workplaceSlice = createSlice({
  name: 'workplace',
  initialState,
  reducers: {
    setColumn(state, action) {
      state.currentBoard.columns = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllBoards.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllBoards.fulfilled, (state, action) => {
        state.boardsList = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllBoards.rejected, state => {
        state.isLoading = false;
      })
      .addCase(addNewBoard.pending, state => {
        state.isLoading = true;
      })
      .addCase(addNewBoard.fulfilled, (state, action) => {
        state.boardsList.push(action.payload);
        state.currentBoard = action.payload;
        state.isLoading = false;
      })
      .addCase(addNewBoard.rejected, state => {
        state.isLoading = false;
      })
      .addCase(getBoardById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getBoardById.fulfilled, (state, action) => {
        state.currentBoard = action.payload;
        state.isLoading = false;
      })
      .addCase(getBoardById.rejected, state => {
        state.isLoading = false;
      })
      .addCase(editBoardById.pending, state => {
        state.isLoading = true;
      })
      .addCase(editBoardById.fulfilled, (state, action) => {
        state.currentBoard = action.payload;
        const index = state.boardsList.findIndex(
          board => board._id === action.payload._id
        );
        state.boardsList.splice(index, 1, action.payload);
        state.isLoading = false;
      })
      .addCase(editBoardById.rejected, state => {
        state.isLoading = false;
      })
      .addCase(deleteBoardById.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteBoardById.fulfilled, (state, action) => {
        state.boardsList.splice(
          state.boardsList.findIndex(
            item => item._id === action.payload.boardId
          ),
          1
        );
        state.currentBoard = {
          name: null,
          columns: [],
          background: null,
          icon: null,
          id: null,
        };
        state.isLoading = false;
      })
      .addCase(deleteBoardById.rejected, state => {
        state.isLoading = false;
      })
      .addCase(addNewColumn.pending, state => {
        state.isLoading = true;
      })
      .addCase(addNewColumn.fulfilled, (state, action) => {
        state.currentBoard.columns.push(action.payload);
        state.isLoading = false;
      })
      .addCase(addNewColumn.rejected, state => {
        state.isLoading = false;
      })
      .addCase(editColumnById.pending, state => {
        state.isLoading = true;
      })
      .addCase(editColumnById.fulfilled, (state, action) => {
        state.currentBoard.columns.splice(
          state.currentBoard.columns.findIndex(
            column => column._id === action.payload._id
          ),
          1,
          action.payload
        );
        state.isLoading = false;
      })
      .addCase(editColumnById.rejected, state => {
        state.isLoading = false;
      })
      .addCase(deleteColumnById.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteColumnById.fulfilled, (state, action) => {
        state.currentBoard.columns.splice(
          state.currentBoard.columns.findIndex(
            column => column._id === action.payload.columnId
          ),
          1
        );
        state.isLoading = false;
      })
      .addCase(deleteColumnById.rejected, state => {
        state.isLoading = false;
      })
      .addCase(addNewTask.pending, state => {
        state.isLoading = true;
      })
      .addCase(addNewTask.fulfilled, (state, action) => {
        const targetColumn = state.currentBoard.columns.find(
          column => column._id === action.payload.columnId
        );
        if (targetColumn) {
          const task = targetColumn.tasks.find(
            task => task._id === action.payload._id
          );
          if (!task) {
            targetColumn.tasks.push(action.payload);
          }
        }
        state.isLoading = false;
      })
      .addCase(addNewTask.rejected, state => {
        state.isLoading = false;
      })
      .addCase(editTaskById.pending, state => {
        state.isLoading = true;
      })
      .addCase(editTaskById.fulfilled, (state, action) => {
        const targetColumn = state.currentBoard.columns.find(
          column => column._id === action.payload.columnId
        );
        if (targetColumn) {
          const task = targetColumn.tasks.find(
            task => task._id === action.payload._id
          );
          if (task) {
            task.title = action.payload.title;
            task.description = action.payload.description;
            task.deadLine = action.payload.deadLine;
            task.labelColor = action.payload.labelColor;
          }
        }
        state.isLoading = false;
      })
      .addCase(editTaskById.rejected, state => {
        state.isLoading = false;
      })
      .addCase(deleteTaskById.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteTaskById.fulfilled, (state, action) => {
        const targetColumn = state.currentBoard.columns.find(
          column => column._id === action.payload.columnId
        );
        if (targetColumn) {
          const taskIndex = targetColumn.tasks.findIndex(
            task => task._id === action.payload.taskId
          );
          if (taskIndex !== -1) {
            targetColumn.tasks.splice(taskIndex, 1);
          }
        }
        state.isLoading = false;
      })
      .addCase(deleteTaskById.rejected, state => {
        state.isLoading = false;
      })

      .addCase(dragTaskById.pending, state => {
        state.isLoading = true;
      })
      .addCase(dragTaskById.fulfilled, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const workplaceReducer = workplaceSlice.reducer;
export const selectAllBoards = state => state.workplace.boardsList;
export const selectCurrentBoard = state => state.workplace.currentBoard;
export const selectColumns = state => state.workplace.currentBoard.columns;
export const isLoading = state => state.workplace.isLoading;
export const { setColumn } = workplaceSlice.actions;
