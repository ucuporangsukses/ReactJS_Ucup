import ConditionalRendering from "./ConditionalRendering.jsx";

function App() {
  return (
    <div>
      <ConditionalRendering isLoggedIn={true} messages={3} />
    </div>
  );
}

export default App;
