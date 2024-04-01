import React from "react";
import "./BonusChoice.css";

interface BonusChoiceProps {
  setGame: (game: string) => void;
}

const BonusChoice: React.FC<BonusChoiceProps> = ({ setGame }) => {
  return (
    <div className="ChoiceBonus">
      <div className="ChoiceBonus__backgraund">
        <img
          className="ChoiceBonus__img"
          src="./image/bg-pentagon.svg"
          alt="Background"
        />
        <div className="Choice__block ">
          <div
            className="Choice__spock ChoiceBonus__paper circle"
            onClick={() => setGame("spock")}
          >
            <img className="img" alt="spock" src="./image/icon-spock.svg" />
          </div>

          <div
            className="Choice__scissors circle"
            onClick={() => setGame("scissors")}
          >
            <img
              className="img img__scissors"
              alt="scissors"
              src="./image/icon-scissors.svg"
            />
          </div>
          <div
            className="Choice__paper ChoiceBonus__paper circle"
            onClick={() => setGame("paper")}
          >
            <img
              className="img img__paper"
              alt="paper"
              src="./image/icon-paper.svg"
            />
          </div>
        </div>
        <div className="Choice__block2">
          <div
            className="Choice__lizard circle"
            onClick={() => setGame("lizard")}
          >
            <img className="img" alt="lizard" src="./image/icon-lizard.svg" />
          </div>
          <div className="Choice__rock circle" onClick={() => setGame("rock")}>
            <img className="img" alt="rock" src="./image/icon-rock.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BonusChoice;
