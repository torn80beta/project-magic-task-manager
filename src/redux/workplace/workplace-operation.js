import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addBoard,
  addColumn,
  addTask,
  deleteBoard,
  deleteColumn,
  deleteTask,
  editBoard,
  editColumn,
  editTask,
  getBoard,
} from 'api/workplace.js';
import axios from 'axios';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const addNewBoard = createAsyncThunk(
  'board/add',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await addBoard(credentials);
      token.set(data.token);
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
      token.set(data.token);
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
      token.set(data.token);
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
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNewColumn = createAsyncThunk(
  'column/add',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await addColumn(credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const editColumnById = createAsyncThunk(
  'column/edit',
  async (editedColumn, thunkAPI) => {
    try {
      const { data } = await editColumn(editedColumn);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteColumnById = createAsyncThunk(
  'column/delete',
  async (id, thunkAPI) => {
    try {
      const { data } = await deleteColumn(id);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNewTask = createAsyncThunk(
  'task/add',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await addTask(credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const editTaskById = createAsyncThunk(
  'task/edit',
  async (editedColumn, thunkAPI) => {
    try {
      const { data } = await editTask(editedColumn);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteTaskById = createAsyncThunk(
  'task/delete',
  async (id, thunkAPI) => {
    try {
      const { data } = await deleteTask(id);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const dragTaskById = createAsyncThunk(
  'task/dragTask',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await editTask(credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
