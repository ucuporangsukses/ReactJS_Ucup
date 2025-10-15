import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export function useUserContext() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }

  return context;
}
