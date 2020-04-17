import * as APIUtil from "../util/task_api_util";

export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const REMOVE_TASK = "REMOVE_TASK";
export const RECEIVE_TASK = "RECEIVE_TASK";
export const RECEIVE_TASK_ERRORS = "RECEIVE_TASK_ERRORS";

export const receiveTasks = tasks => ({
    type: RECEIVE_TASKS,
    tasks
});

export const receiveTask = task => ({
    type: RECEIVE_TASK,
    task
});

export const removeTask = taskId => ({
    type: REMOVE_TASK,
    taskId
});

export const receiveTaskErrors = errors => ({
    type: RECEIVE_TASK_ERRORS,
    errors
});

export const fetchTasks = () => dispatch => (
    APIUtil.fetchTasks().then(tasks => (
        dispatch(receiveTasks(tasks))
    ))
);

export const createTask = (task) => dispatch => (
    APIUtil.createTask(task).then(task => (
        dispatch(receiveTask(task))
   ), err => (
        dispatch(receiveTaskErrors(err.responseJSON))
    ))
);

export const deleteTask = (taskId) => dispatch => (
    APIUtil.deleteTask(taskId).then(() => (
        dispatch(removeTask(taskId))
    ))
)