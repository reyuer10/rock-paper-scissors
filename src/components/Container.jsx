import React from "react";

export default function Container({ handleStartGame }) {
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
        <button className="text-[40px] text-amber-400 hover:scale-110 bg-slate-50 transition-all duration-100 shadow-md rounded-full px-8 py-2">
          Tutorial
        </button>
      </div>
      <div className="flex justify-between text-slate-300 text-lg">
        <p>Created by: reyuer</p>
        <p>ReactJs</p>
      </div>
    </div>
  );
}
