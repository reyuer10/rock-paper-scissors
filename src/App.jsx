import { useState } from "react";
import Container from "./components/Container";
import StartGame from "./components/StartGame";

import { Routes, Route, useNavigate } from "react-router-dom";
import GameOver from "./components/GameOver";

export default function App() {
  const navigate = useNavigate();
  const handleStartGame = () => {
    navigate("/startgame");
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-700">
      <div className="w-[900px] text-center">
        <Routes>
          <Route
            path="/"
            element={<Container handleStartGame={handleStartGame} />}
          />
          <Route path="/startgame" element={<StartGame />} />
          <Route path="/gameover" element={<GameOver />} />
        </Routes>
      </div>
    </div>
  );
}
