export const createTask = task => (
    $.ajax({
        method: "POST",
        url: "/api/tasks",
        data: { task }
    })
);

export const fetchTasks = user => (
    $.ajax({
        method: "GET",
        url: "/api/",
        data: { user }
    })
);

export const deleteTask = taskId => (
    $.ajax({
        method: "DELETE",
        url: "/api/tasks/${taskId}",
        data: { taskId }
    })
);

export const deleteTask = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/tasks/${id}`,
        data: { id }
    });
}