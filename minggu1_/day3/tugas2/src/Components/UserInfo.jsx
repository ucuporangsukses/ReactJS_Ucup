import React from "react";
import Avatar from "./Avatar.jsx";

function UserInfo({ name, avatarUrl }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Avatar src={avatarUrl} alt={name} />
      <span>{name}</span>
    </div>
  );
}

export default UserInfo;
