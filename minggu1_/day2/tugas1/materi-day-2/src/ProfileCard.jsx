function ProfileCard(props) {
  const {photo, name, bio, skills}= props
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        width: "300px",
        textAlign: "center",
      }}
    >
      <img
        src={photo}
        alt={name}
        style={{ width: "100px", borderRadius: "20%" }}
      />
      <h2>{name}</h2>
      <p>{bio}</p>
      <h4>Skills:</h4>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {skills.map((skill, index) => (
          <li key={index}> {skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileCard;