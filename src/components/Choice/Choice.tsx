import React from "react";
import "./Choice.css";

interface ChoiceProps {
  setGame: (game: string) => void;
}

const Choice: React.FC<ChoiceProps> = ({ setGame }) => {
  return (
    <div className="Choice">
      <img
        className="Choice__img "
        src="./image/bg-triangle.svg"
        alt="Triangle background"
      />
      <div className="Choice__block ">
        <div className="Choice__paper circle" onClick={() => setGame("paper")}>
          <img className="img" alt="paper" src="./image/icon-paper.svg" />
        </div>

        <div
          className="Choice__scissors circle"
          onClick={() => setGame("scissors")}
        >
          <img
            className="img "
            alt="scissors"
            src="./image/icon-scissors.svg"
          />
        </div>
      </div>

      <div
        className="Choice__rock margin circle"
        onClick={() => setGame("rock")}
      >
        <img className="img" alt="rock" src="./image/icon-rock.svg" />
      </div>
    </div>
  );
};

export default Choice;
