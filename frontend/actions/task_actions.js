import * as APIUtil from "../util/task_api_util";

export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const REMOVE_TASK = "REMOVE_TASK";
export const RECEIVE_TASK = "RECEIVE_TASK";

const receiveTasks = tasks => ({
    type: RECEIVE_TASKS,
    tasks
});

const receiveTask = task => ({
    type: RECEIVE_TASK,
    task
});

const removeTask = taskId => ({
    type: REMOVE_TASK,
    taskId
});

export const fetchTasks = () => dispatch => (
    APIUtil.fetchTasks().then(tasks => (
        dispatch(receiveTasks(tasks))
    ))
);
export const createTask = (task) => dispatch => (
    APIUtil.createTask(task).then(task => (
        dispatch(receiveTask(task))
    ))
);

export const deleteTask = (taskId) => dispatch => (
    APIUtil.deleteTask(taskId).then(() => (
        dispatch(removeTask(taskId))
    ))
)