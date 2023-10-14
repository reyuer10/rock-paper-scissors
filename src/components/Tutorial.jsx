import React from "react";
import GameInterFace from "../../public/images/GameInterFace.png";

export default function () {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-700">
      <div className="w-[900px] text-center">
        <div>
          <img src={GameInterFace} alt="gameInterface" />
        </div>
        <div>
          <button>Back</button>
        </div>
      </div>
    </div>
  );
}
