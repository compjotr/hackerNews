import React, {useState, useEffect, memo} from 'react'
import {getStory} from '../services/hnAPI'
import {StoryWrapper, StoryTitle, StoryMeta ,StoryMetaElement } from '../styles/StoryStyles'
import {mapTime} from '../mappers/mapTime'
export const Story = memo(function Story({storyId})  {
    const [story, setstory] = useState({})
    
    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setstory(data))        
    }, [])
    
    return story && story.url ?
        <StoryWrapper data-testid="story">
            <StoryTitle>
                <a href={story.url}><p>{story.title}</p></a>
            </StoryTitle>
            <StoryMeta>
                <span data-testid="story-by">
                    <StoryMetaElement> By: {' '}
                    </StoryMetaElement>
                {story.by}
                </span>    
            </StoryMeta>
            <StoryMeta>
                <span data-testid="story-time">
                    <StoryMetaElement> Posted: {' '}

                    </StoryMetaElement>
                {mapTime(story.time)}
                </span>    
            </StoryMeta>
        </StoryWrapper> : null
});