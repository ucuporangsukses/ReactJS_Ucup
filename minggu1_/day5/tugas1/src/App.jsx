import {useState} from "react"
export default function ap(params) {
  const [counter, setCounter] = useState(0)


  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => prev - 1);
  const reset = () => setCounter(0);

  
  const styles = {
    main: {
      textAlign: "center",
      marginTop: "60px",
      background: "linear-gradient(135deg, #89f7fe, #66a6ff)",
      minHeight: "100vh",
      color: "#fff",
      fontFamily: "Poppins, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontSize: "28px",
      fontWeight: "700",
      marginBottom: "15px",
      textShadow: "2px 2px 5px rgba(0,0,0,0.2)",
    },
    number: {
      fontSize: "64px",
      fontWeight: "bold",
      margin: "20px 0",
      transition: "all 0.2s ease-in-out",
    },
    btnGroup: {
      display: "flex",
      gap: "15px",
      alignItems: "center",
    },
    button: {
      backgroundColor: "#fff",
      color: "#333",
      border: "none",
      padding: "10px 18px",
      borderRadius: "12px",
      fontSize: "20px",
      cursor: "pointer",
      fontWeight: "600",
      transition: "0.3s",
    },
    input: {
      width: "70px",
      textAlign: "center",
      border: "2px solid #fff",
      borderRadius: "10px",
      padding: "8px",
      fontSize: "18px",
      outline: "none",
      backgroundColor: "rgba(255,255,255,0.8)",
      color: "#333",
      fontWeight: "600",
    },
    resetBtn: {
      marginTop: "25px",
      backgroundColor: "#ff4b5c",
      color: "#fff",
      border: "none",
      padding: "10px 25px",
      borderRadius: "12px",
      fontSize: "18px",
      cursor: "pointer",
      fontWeight: "600",
      transition: "0.3s",
    },
  };

  return (
    <main style={styles.main}>
      <h1 style={styles.title}>🔥 Aplikasi Counter Modern 🔥</h1>

      <h1 style={styles.number}>{counter}</h1>

      <div style={styles.btnGroup}>
        <button
          style={{ ...styles.button, backgroundColor: "#7DCE13" }}
          onClick={increment}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#5DBB0C")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#7DCE13")}
        >
          ➕
        </button>

        <input
          type="number"
          value={counter}
          onChange={(e) => setCounter(Number(e.target.value))}
          style={styles.input}
        />

        <button
          style={{ ...styles.button, backgroundColor: "#FFB100" }}
          onClick={decrement}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#E09E00")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#FFB100")}
        >
          ➖
        </button>
      </div>

      <button
        style={styles.resetBtn}
        onClick={reset}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#e63946")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#ff4b5c")}
      >
        🔁 Reset
      </button>
    </main>
  );
}
