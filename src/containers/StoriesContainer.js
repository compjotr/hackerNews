import React, {useEffect, useState} from 'react';
import {getStoryIds, newStoriesUrl, topStoriesUrl} from '../services/hnAPI'
import {Story} from '../components/Story'
import {GlobalStyle, StoriesContainerWrapper, StyledButton} from '../styles/StoriesContainerStyles'
import {useInfiniteScroll } from '../hooks/useInfiniteScroll'
export const StoriesContainer =  () =>  {

    const  [newStoryIds, setNewStoryIds] = useState([])
    const  [topStoryIds, setTopStoryIds] = useState([])
    const [loadNewData, setLoadData] = useState(true)

    const {count} = useInfiniteScroll();    
    useEffect(() => {
        getStoryIds(newStoriesUrl).then(data =>  data && setNewStoryIds(data)
        )
    }, [])

     useEffect(() => {
        getStoryIds(topStoriesUrl).then(data =>  data && setTopStoryIds(data)        )
    }, [])
    
       
    return (
      <>
        <GlobalStyle />
            <StoriesContainerWrapper data-testid="stories-container">
        
                <h1>Hacker News Stories</h1>
                <StyledButton loadNewData={loadNewData}  onClick= {() => setLoadData(true)}>new stories</StyledButton>
                <StyledButton loadNewData={!loadNewData} onClick= {() => setLoadData(false)}>top stories</StyledButton>
                { loadNewData ?
                newStoryIds.slice(0, count).map(storyId => (
                <Story key={storyId} storyId={storyId}/>
                )) :
                 topStoryIds.slice(0, count).map(storyId => (
                <Story key={storyId} storyId={storyId}/>
                ))}
            </StoriesContainerWrapper>
         </>
         );
    };

