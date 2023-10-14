import React from "react";
import { useNavigate } from "react-router-dom";


export default function ModalWinner({ showWinner, results }) {
    const navigate = useNavigate()

  if (!showWinner) {
    return null;
  }
  return (
    <div className="container inset-0 fixed items-center justify-center flex flex-col mx-auto">
    <div onClick={e => e.stopPropagation()} className=" space-y-10 bg-slate-500 shadow-lg w-[400px] h-[300px] rounded-2xl flex justify-center items-center flex-col">
    <div className="moda-header ">
        <p className="text-4xl text-amber-300">Game Over</p>
      </div>
      <div>
        <p className="text-3xl text-amber-400">{results}</p>
      </div>
      <div className="exit-button space-x-3">
        <button className="transition-all duration-100 hover:scale-110 px-4 py-2 rounded-full bg-white text-amber-400 shadow-lg" onClick={() => navigate("/")}>Exit game</button>
      </div>
    </div>
    </div>
  );
}
