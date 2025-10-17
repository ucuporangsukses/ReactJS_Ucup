import React from "react";

const Child = React.memo(({ onClick, count }) => {
  console.log("Child di-render 🟢");
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={onClick}>Increase Count</button>
    </div>
  );
});

export default Child;
