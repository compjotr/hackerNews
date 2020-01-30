import axios from 'axios'
import { 
    getStoryIds,
    getStory,
    newStoriesUrl,
    storyUrl
} from '../services/hnAPI.js'
import {singularStory, storyIds, emptySingularStory } from '../fixtures/index'

jest.mock('axios')
describe('HackerNews Api', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    describe('getStory functionality', () => {
        it('requests and gets a story form the hackernews api', async () => {
            axios.get.mockImplementation(() =>
            Promise.resolve({data: singularStory})
            )
        
        const entity = await getStory(1);
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(`${storyUrl + 1}.json`)
        expect(entity).toEqual(singularStory)
          
          })
          it('requests and does not get a story form the hackernews api', async () => {
            axios.get.mockImplementation(() =>
            Promise.resolve({data: emptySingularStory})
            )
        
        const entity = await getStory(1);
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(`${storyUrl + 1}.json`)
        expect(entity).toEqual(emptySingularStory)
          
          })
    })
    describe('getStoryIds', () => {
        it('retreives a story id from the hackernews api', async () =>{
            axios.get.mockImplementation(() => 
            Promise.resolve({data: storyIds}))
            const entity = await getStoryIds();
            expect(axios.get).toHaveBeenCalledTimes(1);
            expect(axios.get).toHaveBeenCalledWith(newStoriesUrl)
            expect(entity).toEqual(storyIds)
          
          })
        })
    })
    
