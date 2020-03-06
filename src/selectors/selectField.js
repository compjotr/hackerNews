export const selectField = ({id,by, url, time, title, kids }= {}) => ({
    id, by, url, time, title,kids
});

export const selectCommentFields = ({id, by, kids, parent, text, time} = {}) => ({
    id, by, kids, parent, text, time
})