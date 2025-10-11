import React from "react";
import UseEffectSederhana from "./components/useEfekSederhana";
import FetchAxios from "./components/soal2&3";
import AbortSimulation from "./components/soal4";
import ManipulasiDataJSON from "./components/soal5";

export default function App() {
  return (
    <div>
<h1>soal 1</h1>
<UseEffectSederhana/>
<h1>soal 2 dan 3</h1>
<FetchAxios />
<h1>soal 4</h1>
<p>lihat konsol</p>
<AbortSimulation />
<h1>soal 5</h1>
<ManipulasiDataJSON />

    </div>
  );
}
