import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const username = form.get("username");
    const password = form.get("password");

    // contoh sederhana: username: bre / password: 1234
    if (username === "bre" && password === "1234") {
      localStorage.setItem("auth", "true");
      if (setIsLoggedIn) setIsLoggedIn(true);
      navigate("/", { replace: true }); // langsung ke Home setelah login
    } else {
      alert("Username / Password salah bre 😅");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md p-8 bg-[#1f1f1f] rounded shadow">
        <h2 className="text-2xl mb-4 font-bold">Login BreStore</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            name="username"
            defaultValue="bre"
            className="p-2 rounded bg-black border border-[#2a2a2a]"
            placeholder="username"
          />
          <input
            name="password"
            defaultValue="1234"
            type="password"
            className="p-2 rounded bg-black border border-[#2a2a2a]"
            placeholder="password"
          />
          <button type="submit" className="mt-2 p-2 bg-gray-300 text-black rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
