import React from "react";
import UserInfo from "./UserInfo.jsx";
import CommentText from "./CommentText.jsx";

function Comment({ name, avatarUrl, text }) {
  return (
    <div
      style={{
        border: "1px solid #1c1a1aff",
        borderRadius: "10px",
        padding: "15px",
        marginBottom: "10px",
        maxWidth: "400px",
      }}
    >
      <UserInfo name={name} avatarUrl={avatarUrl} />
      <CommentText text={text} />
    </div>
  );
}

export default Comment;
