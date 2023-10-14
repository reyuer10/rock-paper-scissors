import { Routes, Route, useNavigate } from "react-router-dom";

// Pages
import Container from "./components/Container";
import StartGame from "./components/StartGame";
import ModalWinner from "./components/ModalWinner";
import ModalSettings from "./components/ModalSettings";
import Tutorial from "./components/Tutorial";

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
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/modalwinner" element={<ModalWinner />} />
          <Route path="/modalsettings" element={<ModalSettings />} />
        </Routes>
      </div>
    </div>
  );
}
