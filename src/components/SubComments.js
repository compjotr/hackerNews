import React, { useEffect, useState } from "react";
import { getComment } from "../services/hnAPI";
import { hrTag, coloredBold, textRow } from "../styles/globalStyles";
import { mapTime } from "../mappers/mapTime";

export const SubComment = comment => {
  const [subCommentData, setSubCommentData] = useState({});

  useEffect(() => {
    let fetch = true;
    if (fetch) {
      getComment(comment.commentId).then(data => setSubCommentData(data));
    }
    fetch = false;
  }, [comment]);

  const returnHTML = () => {
    if (subCommentData.text !== undefined) {
      let body = subCommentData.text;
      return <div dangerouslySetInnerHTML={{ __html: body }} />;
    }
  };
  return subCommentData ? (
    <div style={{ marginLeft: "50px" }}>

     
      <div style={textRow}>
        <p style={coloredBold}> By: {subCommentData?.by}</p>
        <p>{mapTime(subCommentData.time)}</p>
      </div>

      <span style={subCommentData}> {returnHTML()}</span>

      <hr style={hrTag}></hr>
    </div>
  ) : null;
};
