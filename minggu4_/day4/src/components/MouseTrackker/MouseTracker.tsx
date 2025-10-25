import React, { useState, useEffect } from "react";

type MouseTrackerProps = {
  render: (pos: { x: number; y: number }) => React.ReactNode;
};

export default function MouseTracker({ render }: MouseTrackerProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return <div>{render(pos)}</div>;
}
