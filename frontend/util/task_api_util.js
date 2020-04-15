export const createTask = task => (
    $.ajax({
        method: `POST`,
        url: `/api/tasks`,
        data: { task }
    })
);

export const fetchTasks = () => (
    $.ajax({
        method: `GET`,
        url: `/api/tasks`,
    })
);

export const deleteTask = taskId => (
    $.ajax({
        method: `DELETE`,
        url: `/api/tasks/${taskId}`,
    })
);
