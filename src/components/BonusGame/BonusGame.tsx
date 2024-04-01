import React, { memo } from "react";

interface Choices {
  [key: string]: {
    name: string;
    component: JSX.Element;
  };
}

const choices: Choices = {
  rock: {
    name: "rock",
    component: (
      <div className="circleBlock Choice__rock">
        <img className="image" alt="rock" src="./image/icon-rock.svg" />
      </div>
    ),
  },
  paper: {
    name: "paper",
    component: (
      <div className="circleBlock Choice__paper">
        <img className="image" alt="paper" src="./image/icon-paper.svg" />
      </div>
    ),
  },
  scissors: {
    name: "scissors",
    component: (
      <div className="circleBlock Choice__scissors">
        <img className="image" alt="scissors" src="./image/icon-scissors.svg" />
      </div>
    ),
  },
  lizard: {
    name: "lizard",
    component: (
      <div className="circleBlock Choice__scissors">
        <img className="image" alt="scissors" src="./image/icon-lizard.svg" />
      </div>
    ),
  },
  spock: {
    name: "spock",
    component: (
      <div className="circleBlock Choice__rock">
        <img className="image" alt="rock" src="./image/icon-spock.svg" />
      </div>
    ),
  },
};

interface BonusGameProps {
  game: string;
  setGame: (game: string | undefined) => void;
  setCheck: React.Dispatch<React.SetStateAction<number>>;
}

const getResult = (
  game: string,
  computerChoice: string,
  setCheck: React.Dispatch<React.SetStateAction<number>>
) => {
  if (
    (game === "rock" &&
      (computerChoice === "scissors" || computerChoice === "lizard")) ||
    (game === "paper" &&
      (computerChoice === "rock" || computerChoice === "spock")) ||
    (game === "scissors" &&
      (computerChoice === "paper" || computerChoice === "lizard")) ||
    (game === "lizard" &&
      (computerChoice === "spock" || computerChoice === "paper")) ||
    (game === "spock" &&
      (computerChoice === "scissors" || computerChoice === "rock"))
  ) {
    setCheck((e) => e + 1);
    return <p style={{ color: "rgb(63, 216, 127)" }}>ВЫ ВЫИГРАЛИ </p>;
  } else {
    setCheck((e) => e - 1);
    return <p style={{ color: "red" }}>ВЫ ПРОИГРАЛИ</p>;
  }
};

const BonusGame: React.FC<BonusGameProps> = memo(
  ({ game, setGame, setCheck }) => {
    const computerChoice =
      Object.keys(choices)[
        Math.floor(Math.random() * Object.keys(choices).length)
      ];
    const result = getResult(game, computerChoice, setCheck);

    return (
      <div className="Game">
        <div className="Game__user">
          ВЫ ВЫБРАЛИ
          {choices[game].component}
        </div>
        <div className="Game__result">
          {result}
          <button className="button" onClick={() => setGame(undefined)}>
            ИГРАТЬ СНОВА
          </button>
        </div>
        <div className="Game__user">
          КОМПЬЮТЕР ВЫБРАЛ
          {choices[computerChoice].component}
        </div>
      </div>
    );
  }
);

export default BonusGame;
