import React, { createContext, useContext } from "react";

const UserContext = createContext();

export default function PropDrillingChild() {
  const user = { name: "Bre", age: 20 };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Contoh Prop Drilling</h2>
      <PropDrillingExample user={user} />

      <hr style={{ margin: "20px 0" }} />

      <h2>Contoh Context API</h2>
      <UserContext.Provider value={user}>
        <ContextAPIExample />
      </UserContext.Provider>
    </div>
  );
}

function PropDrillingExample({ user }) {
  return <PageDrill user={user} />;
}

function PageDrill({ user }) {
  return <ContentDrill user={user} />;
}

function ContentDrill({ user }) {
  return <ProfileDrill user={user} />;
}

function ProfileDrill({ user }) {
  return <p>Halo, {user.name}! (Prop Drilling)</p>;
}

function ContextAPIExample() {
  return <PageContext />;
}

function PageContext() {
  return <ContentContext />;
}

function ContentContext() {
  return <ProfileContext />;
}

function ProfileContext() {
  const user = useContext(UserContext);
  return <p>Halo, {user.name}! (Context API)</p>;
}
