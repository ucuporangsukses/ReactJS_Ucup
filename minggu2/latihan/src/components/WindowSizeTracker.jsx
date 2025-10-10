import React, { useState, useEffect } from "react";

export default function WindowSizeTracker() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // fungsi buat update ukuran jendela
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      console.log("Ukuran jendela berubah bre!");
    };

    // pas pertama kali render -> pasang event listener
    window.addEventListener("resize", handleResize);
    console.log("Event listener dipasang bre!");

    // cleanup function -> hapus event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Event listener dibersihkan bre!");
    };
  }, []); // cuma jalan sekali pas render pertama

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Ukuran Jendela Browser</h3>
      <p>Lebar: {size.width}px</p>
      <p>Tinggi: {size.height}px</p>
    </div>
  );
}
