import React, { useEffect, useState } from "react";
import { FaRegHandScissors } from "react-icons/fa6";
import { PiHandGrabbingBold, PiHandBold, PiGearSixBold } from "react-icons/pi";
import ModalWinner from "./ModalWinner";
import ModalSettings from "./ModalSettings";

export default function StartGame() {
  const randomNum = Math.floor(Math.random() * 10);
  const [round, setRound] = useState(1);

  // Show modal
  const [showWinner, setShowWinner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // choices
  const [opponentChoice, setOpponentChoice] = useState(null);
  const [yourChoice, setYourChoice] = useState(null);

  // usestate for winning score
  const [yourWin, setYourWin] = useState(0);
  const [opponentWin, setOpponentWin] = useState(0);
  const [draw, setDraw] = useState(0);

  // interactive
  const [opponentBox, setOpponentBox] = useState("?");
  const [isTheBoxHave, setIsTheBoxHave] = useState(false);
  const [randomGuess, setRandomGuess] = useState(randomNum);
  const [fillBox, setFillBox] = useState(null);

  //results
  const [results, setResults] = useState("");

  // Pop-up message for determine winning.
  const [popUpMessage, setPopUpMessage] = useState("");
  const [secondPopUpMessage, setSecondPopUpMessage] = useState("");

  // Pop-up message for 1 more win
  const [popUpWin, setPopUpWin] = useState("");
  const [opponentPopUpWin, setOpponentPopUpWin] = useState("");

  // functions for restart the game
  const handleRestart = () => {
    setDraw(0);
    setYourWin(0);
    setOpponentWin(0);
    setRound(1);
    setShowSettings(!showSettings)
  };

  const handleSettings = () => {
    setShowSettings(!showSettings);
  };

  const onCancel = () => {
    setShowSettings(!showSettings);
  };

  const handleAccess = (choice, nameGuess) => {
    setYourChoice(nameGuess);
    setFillBox(choice);
    setIsTheBoxHave(nameGuess);
    console.log(nameGuess);
  };

  const handleRandomGuess = (guess) => {
    if (guess <= 3) {
      setOpponentChoice("rock");
    } else if (guess <= 6) {
      setOpponentChoice("paper");
    } else if (guess <= 9) {
      setOpponentChoice("scissors");
    }
  };

  useEffect(() => {
    handleRandomGuess(randomGuess);
  });

  useEffect(() => {
    if (yourWin === 2) {
      setPopUpWin("1 more win!");
    } else if (opponentWin === 2) {
      setOpponentPopUpWin("1 more win!");
    } else if (yourWin === 3) {
      setShowWinner(true);
      setResults("You win!");
    } else if (opponentWin === 3) {
      setShowWinner(true);
      setResults("Opponent win");
    }
  });

  const handleExecuteChoice = () => {
    // I put the box choices here just in case the user is still clicking the button.
    // this will avoid the game and the other functions away from confuse.
    setIsTheBoxHave(false);

    // This is for reset score, boxes of choice, and round.
    setTimeout(() => {
      setOpponentBox("?");
      setFillBox(null);
      setPopUpMessage(". . .");
      setSecondPopUpMessage(null);
      setRound((round) => round + 1);
      console.log("Reset");
    }, 3000);

    handleRandomGuess(randomGuess);
    setRandomGuess(randomNum);
    console.log(yourChoice);
    console.log(`Opponent choose: ${opponentChoice}`);

    if (yourChoice === opponentChoice) {
      setDraw((into) => into + 1);
      setPopUpMessage("Draw");
      console.log("Draw");
    } else if (yourChoice === "rock") {
      if (opponentChoice === "scissors") {
        setYourWin((into) => into + 1);
        setPopUpMessage("The opponent choose scissors");
        setSecondPopUpMessage("You win");
      } else {
        setOpponentWin((into) => into + 1);
        setSecondPopUpMessage("Opponent win");
      }
    } else if (yourChoice === "paper") {
      if (opponentChoice === "rock") {
        setYourWin((into) => into + 1);
        setPopUpMessage("The opponent choose rock");
        setSecondPopUpMessage("You win");
      } else {
        setOpponentWin((into) => into + 1);
        setPopUpMessage("The opponent choose scissors");
        setSecondPopUpMessage("Opponent win");
      }
    } else if (yourChoice === "scissors") {
      if (opponentChoice === "paper") {
        setYourWin((into) => into + 1);
        setPopUpMessage("The opponent choose paper");
        setSecondPopUpMessage("You win");
      } else {
        setOpponentWin((into) => into + 1);
        setPopUpMessage("The opponent choose rock");
        setSecondPopUpMessage("Opponent win");
      }
    }

    if (opponentChoice === "rock") {
      return setOpponentBox(
        <PiHandGrabbingBold className="rotate-180" size={55} />
      );
    } else if (opponentChoice === "paper") {
      return setOpponentBox(<PiHandBold className="rotate-180" size={50} />);
    } else if (opponentChoice === "scissors") {
      return setOpponentBox(
        <FaRegHandScissors
          className=" -rotate-90 transform -scale-y-100"
          size={48}
        />
      );
    }
  };

  return (
    <div className="text-center shadow p-10 rounded-2xl bg-slate-600">
      <div className="text-amber-300 text-[30px]">
        <div className="flex items-center justify-center space-x-1">
          <p className="">Round:</p>
          <p className="bg-white w-[40px] h-[35px] flex justify-center items-center rounded-lg text-amber-600">
            {round}
          </p>
        </div>
        <div>
          <p className="text-xl text-amber-300">Draw: {draw}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <div>
            <p className="text-[30px] text-left text-orange-500">Opponent</p>
          </div>

          <p className="text-xl text-amber-600 bg-white rounded-lg w-[80px]">
            Win: {opponentWin}{" "}
          </p>
          <p className="absolute text-sm bg-white rounded-lg my-1 justify-center flex items-center px-3 text-slate-500">
            {opponentPopUpWin}
          </p>
        </div>
        <div>
          <div className="shadow-md rounded-lg p-3 py-3 bg-white">
            <p className="text-slate-500 text-xl">{popUpMessage}</p>
            <p className="text-amber-300 text-xl">{secondPopUpMessage}</p>
          </div>
          <div>
            <button
              onClick={handleSettings}
              className=" float-right my-2 text-[15px] px-4 py-2 text-slate-400 hover:transition-all hover:duration-100 hover:scale-110 transition-colors bg-white duration-300 rounded-full shadow-md cursor-pointer"
            >
              Settings
            </button>
          </div>
        </div>
      </div>
      <div className="space-y-16">
        <div className="flex justify-center">
          <p className="my-4 text-[30px] text-orange-500 shadow-md rounded-lg w-[70px] h-[70px] flex justify-center items-center">
            {opponentBox}
          </p>
        </div>
        <div className=" text-amber-300">
          <div className="flex flex-col justify-center items-center">
            <p className="text-[30px] shadow-md rounded-lg w-[70px] h-[70px] flex justify-center items-center ring-1 ring-white border-4 my-4">
              {fillBox}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex space-x-7">
          <div>
            <p className="text-[30px] text-left text-amber-300">You</p>
            <div>
              <p className="text-xl text-amber-600 text-left bg-white rounded-lg px-2">
                Win: {yourWin}{" "}
              </p>
              <p className="absolute text-sm bg-white rounded-lg my-1 justify-center flex items-center px-3 text-slate-500">
                {popUpWin}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              className="rounded-lg w-[60px] h-[60px] bg-white flex justify-center items-center text-slate-600 transition-all hover:-translate-y-2"
              onClick={() =>
                handleAccess(<PiHandGrabbingBold size={55} />, "rock")
              }
            >
              <PiHandGrabbingBold size={55} />
            </button>
            <button
              className="rounded-lg w-[60px] h-[60px] bg-white flex justify-center items-center text-slate-600 hover:-translate-y-2 transition-all"
              onClick={() => handleAccess(<PiHandBold size={50} />, "paper")}
            >
              <PiHandBold size={50} />
            </button>
            <button
              className="rounded-lg w-[60px] h-[60px] bg-white flex justify-center items-center text-slate-600 hover:-translate-y-2 transition-all"
              onClick={() =>
                handleAccess(
                  <FaRegHandScissors
                    className="rotate-90 transform -scale-y-100"
                    size={48}
                  />,
                  "scissors"
                )
              }
            >
              <FaRegHandScissors
                className="rotate-90 transform -scale-y-100"
                size={48}
              />
            </button>
          </div>
        </div>
        <div className="space-y-2 flex">
          <button
            onClick={handleExecuteChoice}
            disabled={!isTheBoxHave}
            className={`${
              isTheBoxHave === "scissors" ||
              isTheBoxHave === "paper" ||
              isTheBoxHave === "rock"
                ? "text-amber-300"
                : "text-slate-400"
            }  text-[30px] hover:transition-all hover:duration-100 hover:scale-110 transition-colors bg-white duration-300 rounded-full px-8 py-2 shadow-md cursor-pointer`}
          >
            Start
          </button>
        </div>
      </div>

      <div>
        <ModalWinner showWinner={showWinner} results={results} />
        <ModalSettings
          handleRestart={handleRestart}
          onCancel={onCancel}
          showSettings={showSettings}
        />
      </div>
    </div>
  );
}
