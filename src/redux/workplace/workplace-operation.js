import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addBoard,
  addColumn,
  addTask,
  deleteBoard,
  deleteColumn,
  deleteTask,
  dragTask,
  editBoard,
  editColumn,
  editTask,
  getBoard,
  getBoards,
} from 'api/workplace.js';

// import axios from 'axios';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

// axios.interceptors.response.use(
//   response => response,
//   async error => {
//     if (error.response.status === 401) {
//       const refreshToken = JSON.parse(
//         localStorage.getItem('persist:auth')
//       ).refreshToken.slice(1, -1);
//       console.log(refreshToken);
//       const { data } = await axios.post('/users/refresh', { refreshToken });
//       console.log(data);
//       token.set(data.accessToken);
//       // localStorage.setItem("refreshToken", data.refreshToken)
//       return axios(error.config);
//     }
//   }
// );

export const getAllBoards = createAsyncThunk(
  'boards/getAll',
  async thunkAPI => {
    try {
      const { data } = await getBoards();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNewBoard = createAsyncThunk(
  'boards/add',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await addBoard(credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getBoardById = createAsyncThunk(
  'boards/get',
  async (id, thunkAPI) => {
    try {
      const { data } = await getBoard(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editBoardById = createAsyncThunk(
  'boards/edit',
  async (editedBoard, thunkAPI) => {
    try {
      const { data } = await editBoard(editedBoard);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBoardById = createAsyncThunk(
  'boards/delete',
  async (id, thunkAPI) => {
    try {
      const { data } = await deleteBoard(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNewColumn = createAsyncThunk(
  'columns/add',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await addColumn(credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const editColumnById = createAsyncThunk(
  'columns/edit',
  async (editedColumn, thunkAPI) => {
    try {
      const { data } = await editColumn(editedColumn);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteColumnById = createAsyncThunk(
  'columns/delete',
  async (id, thunkAPI) => {
    try {
      const { data } = await deleteColumn(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNewTask = createAsyncThunk(
  'tasks/add',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await addTask(credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editTaskById = createAsyncThunk(
  'tasks/edit',
  async (editedColumn, thunkAPI) => {
    try {
      const { data } = await editTask(editedColumn);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteTaskById = createAsyncThunk(
  'tasks/delete',
  async (id, thunkAPI) => {
    try {
      const { data } = await deleteTask(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const dragTaskById = createAsyncThunk(
  'tasks/dragTask',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await dragTask(credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
