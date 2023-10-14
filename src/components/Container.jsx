import React from "react";
import { RiReactjsFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function Container({ handleStartGame }) {
  const navigate = useNavigate()
  return (
    <div className="text-center shadow-md rounded-3xl p-10 space-y-16 bg-slate-600">
      <div>
        <p className="text-[50px] text-amber-400 px-5 py-10">
          Rock Paper Scissors
        </p>
      </div>
      <div className="flex flex-col items-center space-y-3">
        <button
          onClick={handleStartGame}
          className="text-[40px] text-amber-400 hover:scale-110 bg-slate-50 transition-all duration-100 shadow-md rounded-full px-8 py-2"
        >
          Start Game
        </button>
        <button onClick={() => navigate("/tutorial")} className="text-[40px] text-amber-400 hover:scale-110 bg-slate-50 transition-all duration-100 shadow-md rounded-full px-8 py-2">
          Tutorial
        </button>
      </div>
      <div className="flex justify-between text-slate-300 text-lg">
        <div>
          <p>Created by: reyuer</p>
        </div>
        <div className="flex items-center">
          <p>ReactJs</p>
          <p className="p-1">
            <RiReactjsFill size={24} />
          </p>
        </div>
      </div>
    </div>
  );
}
