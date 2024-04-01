import React, { memo } from "react";

interface GameProps {
  game: string;
  setGame: (game: string | undefined) => void;
  setCheck: React.Dispatch<React.SetStateAction<number>>;
}

const ChoiceElement: React.FC<{ type: string }> = ({ type }) => (
  <div className={`circleBlock Choice__${type}`}>
    <img className="image" alt={type} src={`./image/icon-${type}.svg`} />
  </div>
);

const Game: React.FC<GameProps> = memo(({ game, setGame, setCheck }) => {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let result: React.ReactNode = "";

  if (game === computerChoice) {
    result = "НИЧЬЯ";
  } else if (
    (game === "rock" && computerChoice === "scissors") ||
    (game === "paper" && computerChoice === "rock") ||
    (game === "scissors" && computerChoice === "paper")
  ) {
    setCheck((e) => e + 1);
    result = <p style={{ color: "rgb(63, 216, 127)" }}>ВЫ ВЫИГРАЛИ </p>;
  } else {
    setCheck((e) => e - 1);
    result = <p style={{ color: "red" }}>ВЫ ПРОИГРАЛИ</p>;
  }

  return (
    <div className="Game">
      <div className="Game__user">
        ВЫ ВЫБРАЛИ
        <ChoiceElement type={game} />
      </div>
      <div className="Game__result">
        <p>{result}</p>
        <button className="button" onClick={() => setGame(undefined)}>
          ИГРАТЬ СНОВА
        </button>
      </div>
      <div className="Game__user">
        КОМПЬЮТЕР ВЫБРАЛ
        <ChoiceElement type={computerChoice} />
      </div>
    </div>
  );
});

export default Game;
