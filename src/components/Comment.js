
import React, { useEffect, useState } from "react";
import {getComment} from '../services/hnAPI'
import {hrTag, coloredBold, textRow} from '../styles/globalStyles'
import { mapTime } from '../mappers/mapTime';
import {SubComment} from './subComment'
import {validateCommentData} from '../utils/validateCommentData'
import { AiOutlineLoading3Quarters, AiOutlineLoading } from "react-icons/ai";

export const Comment =  (comment, showComments) => {
    

const [commentData, setCommentData] = useState({})
const[alternateSpinner, setAlternateSpiller] = useState(false)

    useEffect(() => {
        getComment(comment.commentId).then(data => setCommentData(data))
    })
    useEffect(() => {
        setTimeout(() => { 
    setAlternateSpiller(!alternateSpinner)      },200)
    })
  const returnHTML = () =>{
    if(commentData.text !== undefined){
    let body = commentData.text
    return (
     <div  dangerouslySetInnerHTML={{__html: body}} />)
  }
}
    return commentData && showComments ? (
        <>
            <div style={textRow}>
                <p style={coloredBold}> By: {commentData?.by }</p>
                <p>{mapTime(commentData.time)}</p>
            </div>
            <span > {returnHTML()} 
            </span>
           
            <hr style={hrTag}></hr>
        </>
    )   
    : null
}
