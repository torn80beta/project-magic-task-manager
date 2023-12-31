import axiosInstance from 'redux/auth/auth-operation';

const addBoard = async newBoard => {
  return await axiosInstance
    .post('/boards', newBoard)
    .catch(e => e.request.response);
};
const getBoards = async () => {
  return await axiosInstance.get(`/boards`).catch(e => e.request.response);
};

const getBoard = async id => {
  return await axiosInstance
    .get(`/boards/${id}`)
    .catch(e => e.request.response);
};

const editBoard = async ({ name, background, icon, id }) => {
  return await axiosInstance
    .patch(`/boards/${id}`, { name, background, icon })
    .catch(e => e.request.response);
};

const deleteBoard = async id => {
  return await axiosInstance
    .delete(`/boards/${id}`)
    .catch(e => e.request.response);
};

const addColumn = async ({ idBoard, newColumn }) => {
  return await axiosInstance
    .post(`/columns/${idBoard}`, { name: newColumn })
    .catch(e => e.request.response);
};

const editColumn = async ({ name, id }) => {
  return await axiosInstance
    .patch(`/columns/${id}`, { name })
    .catch(e => e.request.response);
};

const deleteColumn = async id => {
  return await axiosInstance
    .delete(`/columns/${id}`)
    .catch(e => e.request.response);
};

const addTask = async ({
  columnId,
  title,
  description,
  labelColor,
  deadLine,
}) => {
  return await axiosInstance
    .post(`/tasks/${columnId}`, {
      title,
      description,
      labelColor,
      deadLine,
    })
    .catch(e => e.request.response);
};

const editTask = async ({ title, description, labelColor, deadLine, _id }) => {
  return await axiosInstance
    .patch(`/tasks/${_id}`, { title, description, labelColor, deadLine })
    .catch(e => e.request.response);
};

const deleteTask = async id => {
  return await axiosInstance
    .delete(`/tasks/${id}`)
    .catch(e => e.request.response);
};

const dragTask = async ({ id, columnId, indexTo, indexFrom }) => {
  return await axiosInstance
    .patch(`/tasks/dragTask/${id}`, {
      columnId,
      indexTo,
      indexFrom,
    })
    .catch(e => e.request.response);
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
