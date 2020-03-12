import React, { useEffect, useState } from "react";
import { getComment } from "../services/hnAPI";
import {
  hrTag,
  textRow,
  coloredBold,
  pinkCommentLine,
  loadMoreButtonStyle
} from "../styles/globalStyles";
import { mapTime } from "../mappers/mapTime";
import { SubComment } from "./SubComments";

export const Comment = (comment, showComments) => {
  const [commentData, setCommentData] = useState({});
  const [showSubComments, setShowSubComments] = useState(false);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
      console.log("comments render");
      getComment(comment.commentId).then(data => setCommentData(data));
    
  }, [comment]);

  const returnHTML = () => {
    if (commentData.text !== undefined) {
      let body = commentData.text;
      return <div dangerouslySetInnerHTML={{ __html: body }} />;
    }
  };
  const setShowCommentButton = boo => {
    setShowSubComments(boo);
    setShowButton(!boo);
  };

  return commentData ? (
    <div>
      {showComments ? (
        <>
         <hr style={hrTag}></hr>
          <div style={textRow}>
            <span style={coloredBold}>by</span>
            <span>{commentData.by}</span>
          
            <span style={{ marginBottom: "20px", marginLeft:"7px" }}>
      {mapTime(commentData.time)}
            </span>
          </div>
          <span > {returnHTML()} </span>
        </>
      ) : null}

      {showSubComments
        ? commentData.kids.map(commentId => (
            <SubComment
              key={commentId}
              showComments={showComments}
              commentId={commentId}
            />
          ))
        : null}

      {commentData.kids !== undefined ? (
        <button
          style={loadMoreButtonStyle}
          onClick={() => setShowCommentButton(showButton)}>
          {showButton ? "show sub comments" : "Hide sub comments"}
        </button>
      ) : null}
    </div>
  ) : null;
};
