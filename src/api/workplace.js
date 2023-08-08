import axios from 'axios';

const addBoard = async newBoard => {
  return await axios
    .post('/boards', newBoard)
    .catch(e => console.log(e.request.response));
};
const getBoards = async () => {
  return await axios.get(`/boards`).catch(e => console.log(e.request.response));
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

const deleteBoard = async id => {
  return await axios
    .delete(`/boards/${id}`)
    .catch(e => console.log(e.request.response));
};

const addColumn = async ({ idBoard, newColumn }) => {
  return await axios
    .post(`/columns/${idBoard}`, { name: newColumn })
    .catch(e => console.log(e.request.response));
};

const editColumn = async ({ name, id }) => {
  return await axios
    .patch(`/columns/${id}`, { name })
    .catch(e => console.log(e.request.response));
};

const deleteColumn = async id => {
  return await axios
    .delete(`/columns/${id}`)
    .catch(e => console.log(e.request.response));
};

const addTask = async ({
  columnId,
  title,
  description,
  labelColor,
  deadLine,
}) => {
  // console.log(newTask);
  return await axios
    .post(`/tasks/${columnId}`, {
      title,
      description,
      labelColor,
      deadLine,
    })
    .catch(e => console.log(e.request.response));
};

const editTask = async ({ title, description, labelColor, deadLine, _id }) => {
  return await axios
    .patch(`/tasks/${_id}`, { title, description, labelColor, deadLine })
    .catch(e => console.log(e.request.response));
};

const deleteTask = async id => {
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
  getBoards,
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
