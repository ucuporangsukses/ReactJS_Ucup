import React from "react";

export default function Home() {
  const styles = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #fafff6, #eaffea, #fffdd0)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "50px",
      textAlign: "center",
      fontFamily: "Poppins, sans-serif",
    },
    content: {
      backgroundColor: "#ffffff",
      border: "2px solid #b8e994",
      borderRadius: "20px",
      padding: "40px 60px",
      boxShadow: "0 5px 15px rgba(0, 128, 0, 0.15)",
      maxWidth: "700px",
      transition: "all 0.3s ease-in-out",
    },
    title: {
      color: "#157a47",
      fontSize: "2rem",
      marginBottom: "15px",
    },
    paragraph: {
      fontSize: "1.1rem",
      color: "#064e3b",
      lineHeight: "1.6",
    },
    highlight: {
      color: "#a3e635",
      fontWeight: "bold",
    },
    bold: {
      color: "#157a47",
      fontWeight: "bold",
    },
  };

  // tambahin efek hover pake onMouseEnter/onMouseLeave
  const [hovered, setHovered] = React.useState(false);

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.content,
          transform: hovered ? "scale(1.03)" : "scale(1)",
          borderColor: hovered ? "#157a47" : "#b8e994",
          boxShadow: hovered
            ? "0 10px 20px rgba(0,128,0,0.25)"
            : "0 5px 15px rgba(0,128,0,0.15)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <h2 style={styles.title}>🏡 Halaman Beranda</h2>
        <p style={styles.paragraph}>
          Halo bre! Selamat datang di{" "}
          <span style={styles.highlight}>Multi Page App</span> pake{" "}
          <span style={styles.bold}>React Router</span> 🔥  
          Jelajahi halaman lain lewat navbar di atas, dijamin kece badai 😎
        </p>
      </div>
    </div>
  );
}
