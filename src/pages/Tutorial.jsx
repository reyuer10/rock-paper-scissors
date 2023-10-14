import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { data } from "../utils/data";

export default function () {
  const navigate = useNavigate();
  let imgArr = [];
  const [imgIndex, setImgIndex] = useState(0);

  // useEffect(() => {
  //   for(let i = 0; i < data.length; i++){
  //     let imgName = data[i].fileName;
  //     let imgid = data[i].id;
  //     console.log(imgArr);
  //     console.log(imgName)
  //   }

  // }, [])

  const handleNextButton = () => {
    setImgIndex((prevState) => (prevState + 1) % data.length);
  };

  const handleBackButton = () => {
    setImgIndex((prevState) => (prevState - 1) % data.length);
  };

  return (
    <div className="h-screen flex items-center bg-slate-700">
      <img className="fixed left-0" src={data[imgIndex].fileName} alt="images" />
      <div>
        {/* <button
          onClick={() => navigate("/")}
          className=" w-[200px] text-3xl px-4 py-2 bg-white rounded-full text-amber-400 hover:-translate-y-1 transition-all duration-100"
        >
          Main menu
        </button> */}
      </div>
      {/* <img className="fixed left-0" src={GameInterFace} alt="gameInterface" /> */}
      <div className="fixed right-0 h-screen flex flex-col justify-between border-8 rounded-3xl border-slate-700 space-y-10 bg-slate-600 p-8">
        <div className="space-y-9">
          <p className="text-lime-400 text-3xl w-[500px] font-fredoka font-bold">
            An interface in Rock-Paper-Scissors allows user to make their
            choices (rock, paper, or scissors) through a graphical or textual
            representation.
          </p>
          <p className="text-lime-400 text-xl w-[500px] font-fredoka font-bold">
            1. The game begins with each player getting ready to make their
            choice of rock, paper, or scissors.
          </p>
        </div>
        <div className="space-x-3">
          <button onClick={handleBackButton} className="text-3xl bg-white px-4 py-2 rounded-full text-amber-400 hover:-translate-y-1 transition-all duration-100">
            Back
          </button>
          <button onClick={handleNextButton}  className="text-3xl bg-white px-4 py-2 rounded-full text-amber-400 hover:-translate-y-1 transition-all duration-100">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
