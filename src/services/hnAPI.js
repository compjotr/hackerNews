import axios from "axios";
import { selectField, selectCommentFields } from "../selectors/selectField";

export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const topStoriesUrl = `${baseUrl}topstories.json`;
export const bestStoriesUrl = `${baseUrl}beststories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStory = async storyId => {
  console.log("api call");

  const story = await axios
    .get(`${storyUrl + storyId}.json`)
    .then(({ data }) => selectField(data))
    .catch(err => console.log("error getting story", err));
  return story;
};

export const getStoryIds = async url => {
  console.log("api call");
  const getData = await axios
    .get(url)
    .then(({ data }) => data)
    .catch(err => console.log("dette er feilen", err));
  return getData;
};
export const getComment = async commentId => {
  console.log("api call with id", commentId);
  const getComment = await axios
    .get(`${storyUrl + commentId}.json`)
    .then(({ data }) => selectCommentFields(data))
    .catch(err => console.log("error loading comment", err));
  return getComment;
};
