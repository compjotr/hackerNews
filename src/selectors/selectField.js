export const selectField = ({id,by, url, time, title, kids }= {}) => ({
    id, by, url, time, title,kids
});

export const selectCommentFields = ({id, by, kids, text, time} = {}) => ({
    id, by, kids, text, time
})