import axios from "axios";

const addStoryUrl = "http://localhost:5000/stories/add"
const storiesUrl = "http://localhost:5000/stories/"
//const getUsersUrl = "http://localhost:5000/users/"
//const addUsersUrl = "http://localhost:5000/users/"

export const addStory = (story) => {
    axios.post(addStoryUrl, story).then(res => console.log(res)).then(res => console.log(res)).catch(error => console.log("error adding story: ", error));
}

export const getStories = () =>{
    const getData = axios.get(storiesUrl).then(res => console.log(res)).catch(error => console.log("error getting stories: ", error));
    return getData
}
export const getSory = (storyId) => {
    const getData = axios.get(storiesUrl + storyId).then(res => console.log(res)).catch(error => console.log("error getting story: ", error));
    return getData
}

export const deleteStory = (storyId) => {
    const getData = axios.delete(storiesUrl + storyId)
} 