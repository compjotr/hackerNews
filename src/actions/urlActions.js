const changeUrl = (url) => {
    return {
        type: "CHANGE_URL",
        payload: url
    }
}

export default {
    changeUrl
}