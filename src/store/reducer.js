const favoriteReducer = (state = [], action) => {
    switch(action.type){
        case "ADD":
            return [
                ...state,
                {
                  id: action.payload.id,
                  title: action.payload.title,
                  by: action.payload.by,
                  showCommments: action.payload.showCommments
                }
              ]

        case "REMOVE":
            return state.filter(payload => payload.id !== action.payload.id)
        
        case "SET_STORIES_FROM_DB":
            return {stories: action.payload}
        case "TOOGLE_COMMENTS":
       
                return {
                    
                    state: state.map(story => story.id === action.id ?
                        // transform the one with a matching id
                        { ...state, showCommments: !action.showCommments } : 
                        // otherwise return original state
                        state
                    ) 
                };
            
        default: 
            return state
    }
}

export default favoriteReducer