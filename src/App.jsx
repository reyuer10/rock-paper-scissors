import { useState } from "react";
import Container from "./components/Container";
import StartGame from "./components/StartGame";

export default function App() {
  const [isGameStart, setIsGameStart] = useState(false);

  const handleStartGame = () => {
    setIsGameStart(!isGameStart);
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="w-[900px] text-center">
        {!isGameStart ? (
          <Container handleStartGame={handleStartGame} />
        ) : (
          <StartGame />
        )}
      </div>
    </div>
  );
}
