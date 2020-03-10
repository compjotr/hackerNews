import React, { useState, useEffect, memo } from "react";
import { getStory } from "../services/hnAPI";
import { Comment} from './Comment'
import { FaRegHeart, FaHeart} from 'react-icons/fa';
import { useDispatch} from 'react-redux'
import allActions from '../actions/index'
import { mapTime } from '../mappers/mapTime';
import {saveLocalState} from '../services/localStorage'
import {storyWrapper, title, textRow, coloredBold, coloredBoldPointer,hrTag
} from  '../styles/globalStyles'

export const Story = memo(function Story({ storyId }) {
  const addToReadingList = "Add to reading list: "
  const removeFromReadingList = "Remove from reading list: "
  const dispatch = useDispatch()
  const [story, setstory] = useState({});
  const [renderEmptyHeart, setRenderEmptyHeart] = useState(false)
  const [readinglistText, setReadngListText] = useState(addToReadingList)
  const [showComments, setShowComments] = useState(false)
  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setstory(data) && console.log(data));
  }, [storyId]);


  const toggleComments = () =>{
    const toggler = showComments
    setShowComments(!toggler)
  }

  const reduxAction =  () => {
    console.log("reduxaction kjører")
    if(renderEmptyHeart){
      dispatch( allActions.favoriteAction.removeFromFavorites(story))
      setRenderEmptyHeart(false)
      setReadngListText(addToReadingList)
      saveLocalState()
    }
    else{
      dispatch( allActions.favoriteAction.addToFavorites(story) )
      setRenderEmptyHeart(true)
      setReadngListText(removeFromReadingList)
      saveLocalState()

    }
  }

  return story && story.url ? (
    <div style={storyWrapper} data-testid='story'>
      <h1 style={title}>
        <a style={title} href={story.url} target='_blank' rel="noopener noreferrer">
          <span>{story.title}</span>
        </a>
      </h1>
      <div style={textRow} data-testid='story-by' >
    
          <span style={coloredBold}> By: </span>
          <span>{story.by}</span>
      </div>
      <div style={textRow} data-testid='story-time'>     
    
          <span style={coloredBold}> Posted: </span>
          <span>{mapTime(story.time)}</span>
         
      </div>
      <div style={textRow} >
      
      <span onClick={() => reduxAction()} style={coloredBoldPointer}>{readinglistText}</span>
      
      {renderEmptyHeart ? <FaHeart style={{cursor:'pointer'}}onClick={() => reduxAction()} /> :  <FaRegHeart style={{cursor:'pointer'}} onClick={() => reduxAction()}/> }
      </div>
      <div style={textRow} data-testid='story-time'>     

      <span style={coloredBold} onClick={() => toggleComments()}> {story.kids === undefined ? "No comments:" : "Show Comments" }</span>
      </div>
      <hr style={hrTag}></hr>
        {story.kids !== undefined && showComments?
          story.kids.slice(0,2).map( commentId => (
            <Comment key={commentId} showComments={showComments} commentId={commentId} />           
            )): null
        }
      

    </div>
  ) : null;
});
 
