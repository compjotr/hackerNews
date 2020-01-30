import React from 'react';
import { act } from 'react-dom/test-utils';
import { StoriesContainer } from '../containers/StoriesContainer';
import { render, cleanup, waitForElement } from '@testing-library/react';
import { storyIds, singularStory } from '../fixtures/index';
import { getStory, getStoryIds } from '../services/hnAPI';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { INCREMENT_STORY } from '../constants/index';

beforeEach(cleanup);
jest.mock('../hooks/useInfiniteScroll.js');
jest.mock('../services/hnAPI.js', () => ({
    getStory: jest.fn(),
    getStoryIds: jest.fn(),
}))

test('render the story container with a story', async() => {
    useInfiniteScroll.mockImplementation(() => ({
        count: INCREMENT_STORY,
    }));
    getStory.mockImplementation(() => Promise.resolve(singularStory));
    getStoryIds.mockImplementation(() => Promise.resolve(storyIds));
    await act (async () => {

        const { getByText, queryByTestId } = render(<StoriesContainer />);
        await waitForElement(() => [
            expect(getByText("Hacker News Stories")).toBeTruthy(),
            expect(getByText('The Tetris Edition')).toBeTruthy(),
            expect(queryByTestId("story-by").textContent).toEqual(' By:Com Pjotr' ),
        ])
    });
})