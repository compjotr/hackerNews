
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

  
    
    return (
        <div>

            {showComments  ?
            <>
             <span onClick={() => setCloseComments(true)}> {commentData.text}  </span> 
             <hr style={hrTag}></hr>

             </>: null  
            }
        </div>
    )
}