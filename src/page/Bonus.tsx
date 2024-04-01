import React, { useState } from "react";
import BonusGame from "../components/BonusGame/BonusGame";
import BonusChoice from "../components/BonusChoice/BonusChoice";
import Check from "../components/Check/Check";
import Button from "../components/Button/Button";

function Bonus() {
  const [game, setGame] = useState<string | undefined>(undefined);
  const [check, setCheck] = useState<number>(0);

  return (
    <>
      <Check check={check} />
      {game ? (
        <BonusGame game={game} setGame={setGame} setCheck={setCheck} />
      ) : (
        <BonusChoice setGame={setGame} />
      )}
      <Button />
    </>
  );
}

export default Bonus;
