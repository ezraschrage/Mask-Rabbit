export const createMasker = task => (
    $.ajax({
        method: `POST`,
        url: `/api/maskers`,
        data: { task }
    })
);

export const fetchTasks = () => (
    $.ajax({
        method: `GET`,
        url: `/api/maskers`,
    })
);

export const deleteTask = taskId => (
    $.ajax({
        method: `DELETE`,
        url: `/api/maskers/${taskId}`,
    })
);
