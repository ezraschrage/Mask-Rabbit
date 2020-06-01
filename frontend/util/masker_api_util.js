export const fetchMaskers = () => (
    $.ajax({
        method: `GET`,
        url: `/api/maskers`,
    })
);

export const fetchMasker = maskerId => (
    $.ajax({
        method: `GET`,
        url: `/api/maskers/${maskerId}`,
    })
);
