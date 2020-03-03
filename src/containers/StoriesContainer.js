import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux'

import {
  getStoryIds,
  newStoriesUrl,
  topStoriesUrl,
  bestStoriesUrl
} from "../services/hnAPI";
import { Story } from "../components/Story";
import {
  GlobalStyle,
  StoriesContainerWrapper,
  StyledButton
} from "../styles/StoriesContainerStyles";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

 export const StoriesContainer = () => {
  const [dataUrl, setdataUrl] = useState(newStoriesUrl);
  const [ids, setIds] = useState([]);
  const [favoriteSelected, setFavoriteSelected] = useState(false)
  const { count } = useInfiniteScroll();
  
   
  const favoriteStories = useSelector(state => state.favoriteReducer)


  useEffect(() => {
    getStoryIds(dataUrl).then(data => data && setIds(data));
  }, [dataUrl]);


  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper data-testid='stories-container'>
        <h1>Hacker News Stories</h1>
        <StyledButton
          loadNewData={dataUrl === newStoriesUrl && !favoriteSelected}
          onClick={() => {setdataUrl(newStoriesUrl);
            setFavoriteSelected(false);
          }}>
          New Stories
        </StyledButton>
        <StyledButton
          loadNewData={dataUrl === topStoriesUrl & !favoriteSelected}
          onClick={() => {setdataUrl(topStoriesUrl)
            setFavoriteSelected(false);
          }}>
          Top Stories
        </StyledButton>
        <StyledButton
          loadNewData={dataUrl === bestStoriesUrl & !favoriteSelected}
          onClick={() => {setdataUrl(bestStoriesUrl);
          setFavoriteSelected(false);
          }}>
          Best Stories

        </StyledButton>
        <StyledButton
          loadNewData={favoriteSelected}

          onClick={() => setFavoriteSelected(true)}
          >
          Favorite Stories
        </StyledButton>
        {favoriteSelected ?   favoriteStories.map(story => (
          <Story addedToFav={true}  key={story.id} storyId={story.id} />
        )) :
        ids.slice(0, count).map(storyId => (
          <Story addedToFav={false} key={storyId} storyId={storyId} />
        ))}
 
      </StoriesContainerWrapper>
    </>
  );
};

 
