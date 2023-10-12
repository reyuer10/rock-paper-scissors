import React, { useEffect, useState } from "react";
import { FaRegHandScissors } from "react-icons/fa6";
import { PiHandGrabbingBold, PiHandBold } from "react-icons/pi";

export default function StartGame() {
  const randomNum = Math.floor(Math.random() * 10);
  // choices
  const [opponentChoice, setOpponentChoice] = useState("");
  const [yourChoice, setYourChoice] = useState("");

  const [round, setRound] = useState(1);

  // usestate for winning score
  const [yourWin, setYourWin] = useState(0);
  const [opponentWin, setOpponentWin] = useState(0);

  // interactive
  const [opponentBox, setOpponentBox] = useState("?");
  const [isTheBoxHave, setIsTheBoxHave] = useState(false);
  const [randomGuess, setRandomGuess] = useState(randomNum);
  const [fillBox, setFillBox] = useState(null);

  //results
  const [results, setResults] = useState("");

  const handleAccess = (choice, nameGuess) => {
    setYourChoice(nameGuess);
    setFillBox(choice);
    setIsTheBoxHave(!isTheBoxHave);
    console.log(yourChoice);
  };

  const handleRandomGuess = (guess) => {
    if (guess <= 3) {
      setOpponentChoice("rock");
      setOpponentBox(<PiHandGrabbingBold />);
      console.log("Opponent choose rock");
    } else if (guess <= 6) {
      setOpponentChoice("paper");
      setOpponentBox(<PiHandBold />);
      console.log("Opponent choose paper");
    } else if (guess <= 9) {
      setOpponentChoice("scissors");
      setOpponentBox(<FaRegHandScissors />);
      console.log("Opponent choose scissors");
    }

    return guess;
  };

  const handleExecuteChoice = () => {
    handleRandomGuess(randomGuess);
    setRandomGuess(randomNum);

    console.log(yourChoice);
    console.log(opponentWin);

    if (yourChoice === opponentChoice) {
      console.log("Draw");
    }
  };

  return (
    <div className="text-center flex flex-col shadow space-y-10 p-10 rounded-2xl">
      <div className="text-amber-300 text-[35px]">
        <p>Round: {round}</p>
      </div>
      <div className="text-orange-500 flex flex-col items-center">
        <p className="text-[35px] text-center">Opponent</p>
        <p className="text-[35px] shadow-md px-8 py-1 rounded-lg">
          {opponentBox}
        </p>
      </div>

      <div className=" text-amber-300">
        <div className="flex flex-col justify-center items-center">
          <p className="text-[35px] shadow-md px-8 py-1 rounded-lg">
            {fillBox}
          </p>
        </div>
        <div>
          <p className="text-[35px]">You </p>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={() =>
              handleAccess(<PiHandGrabbingBold size={55} />, "rock")
            }
          >
            <PiHandGrabbingBold size={55} />
          </button>

          <button
            onClick={() => handleAccess(<PiHandBold size={50} />, "paper")}
          >
            <PiHandBold size={50} />
          </button>
          <button
            onClick={() =>
              handleAccess(
                <FaRegHandScissors className="rotate-90" size={48} />,
                "scissors"
              )
            }
          >
            <FaRegHandScissors className="rotate-90" size={48} />
          </button>
        </div>
      </div>
      <div>
        <button
          onClick={handleExecuteChoice}
          //   disabled={!isTheBoxHave}
          className={`${
            isTheBoxHave ? "text-amber-300" : "text-slate-300"
          }  text-[35px] rounded-full px-8 py-2 shadow-md cursor-pointer`}
        >
          Start
        </button>
      </div>
    </div>
  );
}
