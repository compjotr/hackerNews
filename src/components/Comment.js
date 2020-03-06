
import React, { useEffect, useState, Component } from "react";
import {getComment} from '../services/hnAPI'
import {hrTag} from '../styles/globalStyles'

export const Comment = (comment, showComments) => {

const [commentData, setCommentData] = useState({})
const [showCom, setShowCom] = useState(showComments)
const [closeComments, setCloseComments] = useState(false)
    useEffect(() => {
        getComment(comment.commentId).then(data => setCommentData(data))
    })

  const returnHTML = () =>{
    if(commentData.text !== undefined){
    let body = commentData.text
    return (
     <div  dangerouslySetInnerHTML={{__html: body}} />)
  }
}
  

  
  
    return (
        <div>

            {showComments  ?
            <>
            
             <span onClick={() => setCloseComments(true)}> {returnHTML()}  </span> 
             <hr style={hrTag}></hr>

             </>: null  
            }
        </div>
    )
}