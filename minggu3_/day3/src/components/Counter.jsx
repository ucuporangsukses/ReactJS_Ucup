import React, { useState, useCallback } from "react";
import Child from "./Child";

export default function Parent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Tanpa useCallback (setiap render baru, fungsi bikin object baru)
  // const increment = () => {
  //   setCount(count + 1);
  // };

  // Dengan useCallback (fungsi sama walau parent re-render)
  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  console.log("Parent di-render 🔵");

  return (
    <div>
      <h1>Optimasi dengan useCallback</h1>
      <input
        type="text"
        placeholder="Ketik sesuatu..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Child onClick={increment} count={count} />
    </div>
  );
}
