import React from "react";
import "./Check.css";

interface CheckProps {
  check: number;
}

const Check: React.FC<CheckProps> = ({ check }) => {
  return (
    <div className="Check">
      <div className="Check__block">
        ROCK
        <br /> PAPER
        <br /> SCISSORS
      </div>
      <div className="Check__number">
        <p className="Check__number-text">СЧЕТ</p>
        <p className="Check__number-result">{check}</p>
      </div>
    </div>
  );
};

export default Check;
