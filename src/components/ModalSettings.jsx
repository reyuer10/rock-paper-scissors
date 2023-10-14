import React from "react";
import { useNavigate } from "react-router-dom";

export default function ModalSettings({ showSettings, onCancel, handleRestart }) {
  const navigate = useNavigate();
  if (!showSettings) {
    return null;
  }
  return (
    <div className="container fixed inset-0 justify-center items-center flex mx-auto">
      <div
        onClick={(e) => e.stopPropagation()}
        className=" space-y-10 bg-slate-500 shadow-lg w-[400px] h-[300px] rounded-2xl flex justify-center items-center flex-col"
      >
        <div className="moda-header ">
          <p className="text-4xl text-amber-300">Settings</p>
        </div>
        <div className="exit-button flex flex-col space-y-2">
          <button
            className="transition-all duration-100 hover:scale-110 px-4 py-2 rounded-full bg-white text-slate-500 shadow-lg"
            onClick={() => navigate("/")}
          >
            Quit game
          </button>
          <button onClick={handleRestart} className="transition-all duration-100 hover:scale-110 px-4 py-2 rounded-full bg-white text-amber-400 shadow-lg">
            Restart game
          </button>
          <button
            onClick={onCancel}
            className="transition-all duration-100 hover:scale-110 px-4 py-2 rounded-full bg-white text-slate-400 shadow-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
