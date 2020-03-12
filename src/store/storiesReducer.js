const containsObject = (obj, list) => {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}

const favoriteReducer = (state = [], action) => {
    switch(action.type){
        case "ADD":
            return [
                ...state,
                containsObject(action.payload, state) ? null :
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