import React, { useEffect, useState } from "react";

export default function UseEffectSederhana() {
    const[count, setCount] = useState(0);

    useEffect(() => {
        console.log("Komponen sederhana atau di update bre");
        
    });

    return (
        <div style={{textAlign: "center"}}>
            <h2>Komponen useEffect Sederhana</h2>
            <p>nilai count</p>
            <button onClick={() => setCount(count + 1)}></button>
        </div>
    );
}