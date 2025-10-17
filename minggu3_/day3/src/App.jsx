import React, { Suspense, lazy } from "react";
import ReactMemoComponent from "./components/ReactMemoComponent";
import UseMemoComponent from "./components/useMemoComponent";
import Child from "./components/Child";
import FastComponent from "./components/FastComponent";
import MediumComponent from "./components/MediumComponent";
import SlowComponent from "./components/SlowComponent";
// Lazy load komponen halaman tambahan
const Home = lazy(() => import("./components/Home"));
const Contact = lazy(() => import("./components/Contact"));

export default function App() {
  const [page, setPage] = React.useState("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home />;
      
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8fafc",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Komponen yang udah ada */}
      <ReactMemoComponent />
      <UseMemoComponent />
      <Child />
      <FastComponent />
      <MediumComponent /> 
      <SlowComponent />

      {/* Tombol navigasi lazy load */}
      <div style={{ margin: "20px" }}>
        <button onClick={() => setPage("home")} style={{ margin: "0 5px" }}>Home</button>
        
        <button onClick={() => setPage("contact")} style={{ margin: "0 5px" }}>Contact</button>
      </div>

      {/* Suspense untuk lazy loading */}
      <Suspense fallback={<p>Loading halaman... ⏳</p>}>
        {renderPage()}
      </Suspense>
    </div>
  );
}
