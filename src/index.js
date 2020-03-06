import React from 'react';
import {render} from 'react-dom';
import {App} from './App';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import  rootReducer  from './store/rootReducer';
import * as serviceWorker from './serviceWorker';

export const store = createStore(
    rootReducer,
    applyMiddleware(reduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
)
render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.register();
