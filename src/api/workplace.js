import axios from 'axios';

const addBoard = async newBoard => {
  return await axios
    .post('/boards', newBoard)
    .catch(e => console.log(e.request.response));
};

const getBoard = async id => {
  return await axios
    .get(`/boards/${id}`)
    .catch(e => console.log(e.request.response));
};

const editBoard = async ({ name, background, icon, id }) => {
  return await axios
    .patch(`/boards/${id}`, { name, background, icon })
    .catch(e => console.log(e.request.response));
};

const deleteBoard = async ({ id }) => {
  return await axios
    .delete(`/boards/${id}`)
    .catch(e => console.log(e.request.response));
};

const addColumn = async newColumn => {
  return await axios
    .post('/columns', newColumn)
    .catch(e => console.log(e.request.response));
};

const editColumn = async ({ name, id }) => {
  return await axios
    .patch(`/columns/${id}`, { name })
    .catch(e => console.log(e.request.response));
};

const deleteColumn = async ({ id }) => {
  return await axios
    .delete(`/columns/${id}`)
    .catch(e => console.log(e.request.response));
};
const addTask = async newColumn => {
  return await axios
    .post('/tasks', newColumn)
    .catch(e => console.log(e.request.response));
};

const editTask = async ({ title, description, labelColor, deadline, id }) => {
  return await axios
    .patch(`/tasks/${id}`, { title, description, labelColor, deadline })
    .catch(e => console.log(e.request.response));
};

const deleteTask = async ({ id }) => {
  return await axios
    .delete(`/tasks/${id}`)
    .catch(e => console.log(e.request.response));
};

const dragTask = async ({ name, id }) => {
  return await axios
    .patch(`/tasks/dragTask/${id}`, { name })
    .catch(e => console.log(e.request.response));
};

export {
  addBoard,
  getBoard,
  editBoard,
  deleteBoard,
  addColumn,
  editColumn,
  deleteColumn,
  addTask,
  editTask,
  deleteTask,
  dragTask,
};