import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        -webkit-box-sizing: border-box;
                box-sizing: border-box;
    }
    *, *:before, *:after {
        -webkit-box-sizing:inherit;
                box-sizing:inherit;
    }

    body {
        margin:0;
        padding:0;
        line-height:1;
        color: #202020;
        background-color: #fafafe;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
    }

    ul {
        margin: 0;
        padding: 0;
    }
`;

export const StoriesContainerWrapper = styled.main `
    max-width: 800px;
    padding:20px 15 px;
    margin: auto;
`;
export const StyledButton = styled.button`
    margin-right: 40px;
    background: ${({loadNewData}) => loadNewData ? `palevioletred` : `white`};
    color: ${({loadNewData}) => loadNewData ? `white` : `palevioletred`};
    border: 1px solid black;
    font-size:16px;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
        background-color: palevioletred;
        color:white
    }
`;

