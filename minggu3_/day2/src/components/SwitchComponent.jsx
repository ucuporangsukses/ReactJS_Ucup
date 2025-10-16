import React from "react";
import useToggle from "../hooks/useToggle";

export default function SwitchComponent() {
    const [isOn, toggleSwitch] = useToggle ();

    return (
        <div>
            <p>Status Lampu: {isOn ? "nyala": "mati"}</p>
            <button onClick={toggleSwitch}>
                {isOn ? "Matikan Lampu":"Nyalakan Lampu"}
            </button>
        </div>
    )
}