import { newStoriesUrl } from "../services/hnAPI"


const initialState  = {
    url: newStoriesUrl
}

const urlReducer = (state = initialState , action) => {
    switch(action.type){
        case "CHANGE_URL":
            return {
                ...state,
                url: action.payload
            }
        default: 
            return state
    }
}

export default urlReducer