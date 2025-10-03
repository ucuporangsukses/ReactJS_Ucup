import React from "react";
import Greeting from "./Components/Greeting.jsx";
import ProductCard from "./Components/ProductCards.jsx";
import Card from "./Components/Card.jsx";
import Comment from "./Components/Comment.jsx";
import fotoUcup from "./Components/foto.jpg"
function App() {
  return (
    <div>
      <Greeting name="Kim-Ji-Won" />
      <Greeting name="Go-Yoon-Jung" />
      <Greeting name="Farid" />

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "20px" }}>
        <ProductCard productName="Laptop Gaming" price={15000000} stock={10} isAvailable={true} />
        <ProductCard productName="Headset" price={500000} stock={0} isAvailable={false} />
        <ProductCard productName="Mouse Wireless" price={250000} />
      </div>

      <Card>
        <p>Judul</p>
        <h2>Ucup Succes</h2>
      </Card>

      <Card>
        <img src="https://image.idntimes.com/post/20240504/614922094-8ec6ec3ddb90d2bd58c672717f0972f2-8a1f295204cb9a9607196ea05009cd6a-86399e0f708ba9bb65d33644f2f63b3f.png" alt="Go-Yoon-Jung" />
        <p>Go-Yoon-Jung</p><button>TOMBOL MASUK SURGA</button>
      </Card>
      <div style={{ padding: "20px"}}>
        <Comment
        name="Kim Jiwon"
        avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoPLgzsiE1EsepXqTXubP1c8wjZ6nmnb3SgA&s"
        text=" ketemuan yuk"
        />
        <Comment
        name="Park Ucup"
        avatarUrl={fotoUcup}
        text="Oke ACC"
        />

      </div>
    </div>
    
    
  );
}

export default App;
