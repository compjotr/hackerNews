import favoriteReducer from './storiesReducer'
import urlReducer from './urlReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    favoriteReducer,
    urlReducer,
})

export default rootReducer