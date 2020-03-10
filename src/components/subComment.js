
import React, { useEffect, useState } from "react";
import {getComment} from '../services/hnAPI'
import {hrTag, coloredBold, textRow} from '../styles/globalStyles'
import { mapTime } from '../mappers/mapTime';
import { AiOutlineLoading3Quarters, AiOutlineLoading } from "react-icons/ai";

export const SubComment = (comment, showComments) => {

const [subCommentData, setSubCommentData] = useState({})
const[alternateSpinner, setAlternateSpiller] = useState(false)

    useEffect(() => {
        getComment(comment.commentId).then(data => setSubCommentData(data))
    })
useEffect(() => {
    setTimeout(() => { 
setAlternateSpiller(!alternateSpinner)      },200)
})

  const returnHTML = () =>{
    if(subCommentData.text !== undefined){
    let body = subCommentData.text
    return (
     <div  dangerouslySetInnerHTML={{__html: body}} />)
  }
}  
    return subCommentData && subCommentData.by && showComments ? (
       <div style={{marginLeft:'50px'}}>
       
        <div style={textRow}>
        </div>
        <div style={textRow}>
            <p style={coloredBold}> By: {subCommentData?.by }</p>
            <p >{mapTime(subCommentData.time)}</p>
        </div>
        
        <span style={subCommentData} > {returnHTML()} 
        </span>
        
        <hr style={hrTag}></hr>
        
        </div>
    )   
    :  <><p>Loading sub comments </p> {alternateSpinner ? <AiOutlineLoading3Quarters /> : <AiOutlineLoading/>} </>
}