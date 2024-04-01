import React, { useState } from "react";
import Game from "../components/Game/Game";
import Choice from "../components/Choice/Choice";
import Check from "../components/Check/Check";
import Button from "../components/Button/Button";

function Home() {
  const [game, setGame] = useState<string | undefined>(undefined);
  const [check, setCheck] = useState<number>(0);

  return (
    <>
      <Check check={check} />
      {game ? (
        <Game game={game} setGame={setGame} setCheck={setCheck} />
      ) : (
        <Choice setGame={setGame} />
      )}
      <Button />
    </>
  );
}

export default Home;
