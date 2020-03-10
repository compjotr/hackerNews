export const validateCommentData = (data) => {
    if(data === undefined){
        return "comment object er undefined"
    } 
    if(data.id === undefined){
     return "comment id er undefined"

    } if(data.by === undefined){
     return "comment by er undefined"

    } //if(commentData.kids === undefined){
    // return "comment sine kids er undefined"
   // }
    if(data.text === undefined){
     return "comment text er undefined"

    }
    if(data.time === undefined){
     return "comment time er undefined"

    }
    else{
        return true
    }
}
