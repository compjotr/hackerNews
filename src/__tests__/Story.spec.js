import React from 'react';
import { act } from 'react-dom/test-utils';
import { Story } from '../components/Story';
import { render, cleanup, waitForElement } from '@testing-library/react';
import { singularStory } from '../fixtures/index';
import { getStory } from '../services/hnAPI';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { INCREMENT_STORY } from '../constants/index';

beforeEach(() =>{
     cleanup();
     jest.resetAllMocks();
});
    jest.mock('../services/hnAPI.js', () => ({
        getStory: jest.fn()
    }))
   

    test("renders a story", async () => {
    getStory.mockImplementation(() => Promise.resolve(singularStory));
   
    await act (async () => {

        const { getByText, getByTestId } = render(<Story storyId="1"/>);
        await waitForElement(() => [
            expect(getByTestId('story')).toBeTruthy(),
            expect(getByText('The Tetris Edition')).toBeTruthy(),
            expect(getByTestId("story-by").textContent).toEqual(' By:Com Pjotr' ),
        ])
    });
})