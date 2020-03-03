import React, { useState, useEffect, memo } from "react";
import { getStory } from "../services/hnAPI";
import {
  StoryWrapper,
  StoryTitle,
  StoryMeta,
  StoryMetaElement
} from "../styles/StoryStyles";
import {useSelector, useDispatch} from 'react-redux'
import allActions from '../actions/index'

import { mapTime } from "../mappers/mapTime";
export const Story = memo(function Story({ storyId , addedToFav}) {

  const dispatch = useDispatch()
  const [story, setstory] = useState({});
  const [favButtonText, setFavButtonText] = useState(" Add to favorites")
  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setstory(data) && console.log(data));
  }, []);

  const reduxAction =  () => {
    if(addedToFav){
      dispatch( allActions.favoriteAction.removeFromFavorites(story))
      setFavButtonText("Add to favorites")
    }
    else{
      dispatch( allActions.favoriteAction.addToFavorites(story) )
      setFavButtonText("remove from favorites")
    }
  }

  return story && story.url ? (
    <StoryWrapper data-testid='story'>
      <StoryTitle>
        <a href={story.url} target='_blank'>
          <p>{story.title}</p>
        </a>
      </StoryTitle>
      <StoryMeta>
        <span data-testid='story-by'>
          <StoryMetaElement> By: </StoryMetaElement>
          {story.by}
        </span>
      </StoryMeta>
      <StoryMeta>
        <span data-testid='story-time'>
          <StoryMetaElement> Posted: </StoryMetaElement>
          {mapTime(story.time)}
        </span>
      </StoryMeta>
      <button   onClick={() => reduxAction()}>
        { favButtonText }
 </button>
    </StoryWrapper>
  ) : null;
});
