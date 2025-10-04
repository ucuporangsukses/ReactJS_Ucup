import React from "react";

function ProfileBox({ foto }) {
  const boxStyle = {
    backgroundColor: "#e3f2fd",
    border: "2px solid #1976d2",
    padding: "20px",
    borderRadius: "10px",
    width: "250px",
    textAlign: "center",
    margin: "10px auto",
  };

  const nameStyle = {
    color: "#0d47a1",
    fontWeight: "bold",
  };

  const descStyle = {
    color: "#424242",
    fontStyle: "italic",
  };

  const imageStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
  };

  return (
    <div style={boxStyle}>
      {/* FOTO DARI PROPS */}
      <img src={foto} alt="Foto Profile" style={imageStyle} />
      <h2 style={nameStyle}>Ucup Bre</h2>
      <p style={descStyle}>Frontend Developer</p>
    </div>
  );
}

export default ProfileBox;
