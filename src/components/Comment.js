
import React, { useEffect, useState, Component } from "react";
import {getComment} from '../services/hnAPI'
import {hrTag, textRow, coloredBold} from '../styles/globalStyles'
import { mapTime } from '../mappers/mapTime';
export const Comment = (comment, showComments) => {

const [commentData, setCommentData] = useState({})
const [showCom, setShowCom] = useState(showComments)
const [closeComments, setCloseComments] = useState(false)
    useEffect(() => {
        let fetch = true
        if(fetch){
        getComment(comment.commentId).then(data => setCommentData(data))
    }
    fetch = false
    })

  const returnHTML = () =>{
    if(commentData.text !== undefined){
    let body = commentData.text
    return (
     <div  dangerouslySetInnerHTML={{__html: body}} />)
  }
}
  

  
  
    return commentData ? (
        <>

            {showComments  ?
            <>
              <hr style={hrTag}></hr>  
            <div style={textRow}>
            <span style={coloredBold}>by</span>
            <span>{commentData.by}</span>
            </div>
          
            <div style={textRow}>
              
             <span style={coloredBold}>Posted</span>
            <span style={{marginBottom:'20px'}}>{mapTime(commentData.time)}</span>
            </div>
             <span onClick={() => setCloseComments(true)}> {returnHTML()}  </span> 
             <hr style={hrTag}></hr>
            </>
             : null  
            }
        </>
    ) : null 
}