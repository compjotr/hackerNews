const addToFavorites = (story) => {
    return {
        type: "ADD",
        payload: story
    }
}

const removeFromFavorites = (story) => {
    return {
        type: "REMOVE",
        payload: story
    }
}
export default {
    addToFavorites,
    removeFromFavorites
}