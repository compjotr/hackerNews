import {
  getStoryIds,
  newStoriesUrl,
  topStoriesUrl,
  bestStoriesUrl
} from "../services/hnAPI";
import {getLocalState} from '../services/localStorage';

import {
  ButtonStyle,
  palevioletred,
  white,
  globalStyle,
  centerAlign,
  marginBottom
} from "../styles/globalStyles";
import { useDispatch, useSelector } from 'react-redux';
import allActions from "../actions";
import React, { useEffect, useState } from "react";

export const Header = () => {
  const storyUrl = useSelector(state => state.urlReducer);
  const [url, setUrl] = useState(storyUrl);
  const [favoriteSelected, setFavoriteSelected] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActions.urlReducer.changeUrl(url));
  }, [url]);

  const buttonPressed = storyurl => {
    return url === storyurl && !favoriteSelected;
  };
  const retreiveReadList = () => {
    setFavoriteSelected(true);
    const favStories = getLocalState();
    if (favStories !== undefined) {
      dispatch(allActions.favoriteAction.addToFavorites(favStories));
    }
  };

  return (
    <div style={globalStyle}>
      <div data-testid='stories-container'>
        <div style={centerAlign}>
          <h1 style={marginBottom}>Hacker News Stories</h1>

          <button
            style={
              buttonPressed(newStoriesUrl)
                ? { ...ButtonStyle, ...palevioletred }
                : { ...ButtonStyle, ...white }
            }
            onClick={() => {
              setUrl(newStoriesUrl);
              setFavoriteSelected(false);
            }}>
            New Stories
          </button>
          <button
            style={
              buttonPressed(topStoriesUrl)
                ? { ...ButtonStyle, ...palevioletred }
                : { ...ButtonStyle, ...white }
            }
            onClick={() => {
              setUrl(topStoriesUrl);
              setFavoriteSelected(false);
            }}>
            Top Stories
          </button>
          <button
            style={
              buttonPressed(bestStoriesUrl)
                ? { ...ButtonStyle, ...palevioletred }
                : { ...ButtonStyle, ...white }
            }
            onClick={() => {
              setUrl(bestStoriesUrl);
              setFavoriteSelected(false);
            }}>
            Best Stories
          </button>
          <button
            style={
              favoriteSelected
                ? { ...ButtonStyle, ...palevioletred }
                : { ...ButtonStyle, ...white }
            }
            onClick={() => retreiveReadList()}>
            Your Reading List
          </button>
        </div>
      </div>
    </div>
  );
};
