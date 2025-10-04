import ProfileCard from "./ProfileCard.jsx";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px", border:"2px black solid", boxShadow:"2px 2px 2px"}}>
      <ProfileCard
        name="Yusuf Ramadhani"
        photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjTaIht2gRi0MiqMXcWBFuvcj7qfMNZoxemQ&s"
        bio="Seorang programmer yang suka belajar."
        skills={["JavaScript", "HTML", "CSS"]}
      />
    </div>
  );
}

export default App;

