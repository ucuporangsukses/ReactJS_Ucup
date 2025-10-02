import ProfileCard from "./ProfileCard.jsx";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <ProfileCard
        name="Yusuf Ramadhani"
        photo=""
        bio="Seorang programmer yang suka belajar."
        skills={["JavaScript", "HTML", "CSS"]}
      />
    </div>
  );
}

export default App;

