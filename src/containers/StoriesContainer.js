import React, { useEffect, useState } from "react";
import {useSelector} from 'react-redux'

import {
  getStoryIds,
  newStoriesUrl,
  topStoriesUrl,
  bestStoriesUrl
} from "../services/hnAPI";
import { Story } from "../components/Story";
import {
  ButtonStyle, 
  palevioletred,
  white, 
  globalStyle, 
  centerAlign, 
  marginBottom
} from '../styles/globalStyles'
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import {getLocalState} from '../services/localStorage';
import { useDispatch} from 'react-redux'
import allActions from '../actions/index'
//import { store } from "../index";
//import {storyRef, setData} from '../database/firebase'

 export const StoriesContainer = () => {
  const dispatch = useDispatch()

  const [dataUrl, setdataUrl] = useState(newStoriesUrl);
  const [ids, setIds] = useState([]);
  const [favoriteSelected, setFavoriteSelected] = useState(false)
  const { count } = useInfiniteScroll();
  
   
  const favoriteStories = useSelector(state => state.favoriteReducer)

  
  useEffect(() => {
    getStoryIds(dataUrl).then(data => data && setIds(data));
  }, [dataUrl]);

  const buttonPressed = (url) => {
    return dataUrl === url && !favoriteSelected 
  }

  const retreiveReadList = () => {
    setFavoriteSelected(true);
    const favStories = getLocalState()
    if( favStories !== undefined){
      dispatch( allActions.favoriteAction.addToFavorites(favStories) )
    }
  }


  return (
    
      <div style={globalStyle} >
      <div data-testid='stories-container'>
      <div style={centerAlign}>
        <h1 style={marginBottom} >Hacker News Stories</h1>
       
        <button  style={ buttonPressed(newStoriesUrl) ?  {...ButtonStyle,  ...palevioletred} : {...ButtonStyle,  ...white} }
          onClick={() => {setdataUrl(newStoriesUrl);
            setFavoriteSelected(false);
          }}>
          New Stories
        </button>
        <button  style={ buttonPressed(topStoriesUrl) ?  {...ButtonStyle,  ...palevioletred} : {...ButtonStyle,  ...white} }
          onClick={() => {setdataUrl(topStoriesUrl)
            setFavoriteSelected(false);
          }}>
          Top Stories
        </button>
        <button  style={ buttonPressed(bestStoriesUrl) ?  {...ButtonStyle,  ...palevioletred} : {...ButtonStyle,  ...white} }
          onClick={() => {setdataUrl(bestStoriesUrl);
          setFavoriteSelected(false);
          }}>
          Best Stories

        </button>
        <button  style={ favoriteSelected ?  {...ButtonStyle,  ...palevioletred} : {...ButtonStyle,  ...white} }

          onClick={() => retreiveReadList()}
          >
          Your Reading List 
        </button>
        </div>
        {favoriteSelected && favoriteStories !== undefined ?   favoriteStories.map(story => (
          <Story  readLater={true} key={story.id} storyId={story.id} />
        )) :
        ids.slice(0, count).map(storyId => (
          <Story storyUrl={dataUrl}readLater={false} key={storyId} storyId={storyId} />
        ))}
 
      </div>
    </div>
  );
};
 