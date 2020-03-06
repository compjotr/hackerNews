const favoriteReducer = (state = [], action) => {
    switch(action.type){
        case "ADD":
            return [
                ...state,
                {
                  id: action.payload.id,
                  title: action.payload.title,
                  by: action.payload.by
                }
              ]

        case "REMOVE":
            return state.filter(payload => payload.id !== action.payload.id)
        
        case "SET_STORIES_FROM_DB":
            return {stories: action.payload}
        default: 
            return state
    }
}

export default favoriteReducer