import TodoListFilm from "./Components/TodoListFilm";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#0d0d0d",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        🎥 Daftar K-Drama Favorit Gue 💖
      </h1>
      <TodoListFilm />
    </div>
  );
}

export default App;
