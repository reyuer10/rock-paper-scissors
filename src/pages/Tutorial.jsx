import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { data } from "../utils/data";

export default function () {
  const navigate = useNavigate();
  const [imgIndex, setImgIndex] = useState(0);
  const [isIndexReachLimit, setIsIndexReachLimit] = useState(false);

  const handleNextButton = () => {
    setImgIndex((prevState) => (prevState + 1) % data.length);
    if (imgIndex === 4) {
      setIsIndexReachLimit(true);
    }

    console.log(imgIndex);
  };

  const handleBackButton = () => {
    setImgIndex((prevState) => (prevState - 1 + data.length) % data.length);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-slate-700 space-x-10">
      <img className="rounded-2xl" src={data[imgIndex].fileName} alt="images" />

      {/* <img className="fixed left-0" src={GameInterFace} alt="gameInterface" /> */}
      <div className=" justify-between border-8 rounded-3xl border-slate-700 space-y-10 bg-slate-600 p-8">
        <div className="space-y-9">
          <div>
            <p className="text-lime-400 text-2xl w-[500px] font-fredoka font-bold">
              {data[imgIndex].description}
            </p>
          </div>
        </div>

        <div className="space-x-3">
          {!isIndexReachLimit ? (
            <>
              <button
                onClick={handleBackButton}
                className="text-3xl bg-white px-4 py-2 rounded-full text-amber-400 hover:-translate-y-1 transition-all duration-100"
              >
                Back
              </button>
              <button
                onClick={handleNextButton}
                className="text-3xl bg-white px-4 py-2 rounded-full text-amber-400 hover:-translate-y-1 transition-all duration-100"
              >
                Next
              </button>
            </>
          ) : (
            <>
              <button
              onClick={() => navigate("/")}
              className="text-3xl bg-white px-4 py-2 rounded-full text-amber-400 hover:-translate-y-1 transition-all duration-100">
                Main menu
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
