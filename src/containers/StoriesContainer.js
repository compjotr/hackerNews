import React, {useEffect, useState} from 'react';
import {getStoryIds, newStoriesUrl, topStoriesUrl, bestStoriesUrl} from '../services/hnAPI'
import {Story} from '../components/Story'
import {GlobalStyle, StoriesContainerWrapper, StyledButton} from '../styles/StoriesContainerStyles'
import {useInfiniteScroll } from '../hooks/useInfiniteScroll'
export const StoriesContainer =  () =>  {

    
    const [dataUrl, setdataUrl] = useState(newStoriesUrl)
    const [ids, setIds] = useState([])
    const {count} = useInfiniteScroll();    
    useEffect(() => {
        
        getStoryIds(dataUrl).then(data =>  data && setIds(data)
        )
    }, [dataUrl])

    return (
      <>
        <GlobalStyle />
            <StoriesContainerWrapper data-testid="stories-container">
        
                <h1>Hacker News Stories</h1>
                <StyledButton loadNewData={dataUrl === newStoriesUrl }  onClick= {() => setdataUrl(newStoriesUrl)}>New Stories</StyledButton>
                <StyledButton loadNewData={ dataUrl === topStoriesUrl} onClick= {() => setdataUrl(topStoriesUrl)}>Top Stories</StyledButton>
                <StyledButton loadNewData={dataUrl === bestStoriesUrl} onClick= {() => setdataUrl(bestStoriesUrl)}>Best Stories</StyledButton>

                { 
                ids.slice(0, count).map(storyId => (
                <Story key={storyId} storyId={storyId}/>
                ))}
            </StoriesContainerWrapper>
         </>
         );
    };

