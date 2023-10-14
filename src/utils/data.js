import UserInterface from "../../public/images/UserInterface.png";
import OpponentPicking from "../../public/images/OpponentPicking.png";
import GameInterFace from "../../public/images/GameInterFace.png";
import Draw from "../../public/images/Draw.png";
import Scoring from "../../public/images/Scoring2.png";
import GameOver from "../../public/images/GameOver.png";

export const data = [
  {
    id: 1,
    fileName: GameInterFace,
    description: `1. An interface in Rock-Paper-Scissors allows user to make their
    choices (rock, paper, or scissors) through a graphical or textual
    representation. The game begins with both the user and the opponent at zero wins.`,
  },
  {
    id: 2,
    fileName: UserInterface,
    description: `2. The start button will be undisabled after a user pick their choice.`,
  },
  {
    id: 3,
    fileName: OpponentPicking,
    description: `3. The opponent's choice is kept hidden("?") until you click the button start`,
  },
  {
    id: 4,
    fileName: Draw,
    description: `4. If both players choose the same shape, it's a tie, and the game can either end as a draw or be played again to break the tie`,
  },
  {
    id: 5,
    fileName: Scoring,
    description: `5. Once a user has won the required number of rounds (in this case, 3 wins total: 2 initial wins + 1 more win), they are declared the overall winner of the game.`,
  },
  {
    id: 6,
    fileName: GameOver,
    description: ``,
  },
];
