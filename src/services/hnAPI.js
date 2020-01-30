import axios from 'axios'
import {selectField} from '../selectors/selectField'

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;


export const getStory = async (storyId) => {
    const story = await axios.get(`${storyUrl + storyId}.json`).then(({data}) => selectField(data))
    .catch(err => console.log("error getting story", err))
    return story
}

export const getStoryIds = async () => {
    const getData =  await axios.get(newStoriesUrl).then(({data}) => data).catch(err=> console.log("dette er feilen", err))
    return getData
}