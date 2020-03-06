import {storyRef} from '../database/firebase'

export const addStory = story => async dispatch => {
    storyRef.push().set(story);
};
export const removeStory = story => async dispatch => {
    storyRef.child(story).remove();
  };

  

const addFavoritesFromDB = (stories) => {
    return {
        type: "SET_STORIES_FROM_DB",
        payload: stories
    }
}

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
    removeFromFavorites,
    addFavoritesFromDB
}