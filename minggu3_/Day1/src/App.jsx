import React from "react";

// Context Providers
import { UserProvider } from "./context/UserContext";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { NotificationProvider } from "./context/NotificationContext";

// Components
import Header from "./components/Header";
import ThemeButton from "./components/ThemeButton";
import UserProfile from "./components/UserProfile";
import CardWithText from "./components/CardWithText";

function App() {
  return (
    <div>
      <ThemeProvider>
      <UserProvider>
        <LanguageProvider>
          <NotificationProvider>
            <div
              style={{
                padding: "20px",
                minHeight: "100vh",
                transition: "0.3s",
                fontFamily: "sans-serif",
              }}
            >
              {/* Header pakai dua context sekaligus */}
              <Header />

              <hr style={{ margin: "20px 0" }} />

              {/* Theme toggle */}
              <ThemeButton />

              <hr style={{ margin: "20px 0" }} />

              {/* User info (pakai custom hook useUserContext) */}
              <UserProfile />

              {/* Card contoh ikut tema */}
              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                <CardWithText text="Card pertama ikut tema" />
                <CardWithText text="Card kedua juga ikut tema" />
              </div>
            </div>
          </NotificationProvider>
        </LanguageProvider>
      </UserProvider>
    </ThemeProvider>
    </div>
  );
}

export default App;
