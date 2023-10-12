import React from "react";

export default function Container({ handleStartGame }) {
  return (
    <div className="text-center shadow-md rounded-3xl p-10 space-y-20">
      <div>
        <p className="text-[50px] text-amber-400 px-5 py-10">
          Rock Paper Scissors
        </p>
      </div>
      <div className="flex flex-col items-center">
        <button
          onClick={handleStartGame}
          className="text-[50px] text-amber-400 hover:bg-slate-50 transition-colors duration-100 shadow-md rounded-full px-8 py-2"
        >
          Start Game
        </button>
        <button className="text-[50px] text-amber-400 hover:bg-slate-50 transition-colors duration-100 shadow-md rounded-full px-8 py-2">
          Tutorial
        </button>
      </div>
      <div className="flex justify-between text-slate-500 text-xl">
        <p>Created by: reyuer</p>
        <p>ReactJs</p>
      </div>
    </div>
  );
}
