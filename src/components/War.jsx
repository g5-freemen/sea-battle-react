import React, { useContext, useEffect, useState } from "react";
import uuid from "react-uuid";

import { BattlefieldContext } from "./BattlefieldContext";

export default function War() {
  const {
    message,
    bfCoord,
    checkWinner,
    lang,
    compBF,
    setCompBF,
    playerBF,
    setPlayerBF,
    getRnd,
    turn,
    setTurn,
    turnNum,
    setTurnNum,
    playHit,
    playMiss,
    playFight,
    store,
    timeMachine,
    setTimeMachine,
  } = useContext(BattlefieldContext);
  const [alarm, setAlarm] = useState(null);
  const [compLastHit, setCompLastHit] = useState(null);
  const pads = document.querySelectorAll(".battlefield-pad");

  function turnBack() {
    document.querySelector(".App").classList.toggle("darken");
    setTimeout(() => {
      document.querySelector(".App").classList.toggle("darken");
    }, 1000);
    setTimeMachine(true);
    store.dispatch({ type: "TURN_BACK", payload: turnNum - 1 });

    let storedBFs = store.getState().map((el) => JSON.parse(el));
    let newBFs = storedBFs[storedBFs.length - 1];
    let newPlayerBF = [...newBFs.playerBF];
    let newCompBF = [...newBFs.compBF];
    setPlayerBF(newPlayerBF);
    setCompBF(newCompBF);
    setTurnNum((prev) => prev - 1);
    if (turn !== "player") setTurn("player");
  }

  function shoot(ev) {
    let x, y;
    let evX = ev.clientX;
    let evY = ev.clientY;

    for (let i = 0; i < bfCoord.gridCol.length - 1; i++) {
      // get player's shoot Col & Row
      if (evX >= bfCoord.gridCol[i] && evX <= bfCoord.gridCol[i + 1]) x = i + 1;
      if (evY >= bfCoord.gridRow[i] && evY <= bfCoord.gridRow[i + 1]) y = i + 1;
    }

    shootCheck(x, y);
  }

  function shootCheck(x, y) {
    if (
      [...playerBF].flat().filter((el) => el === +el).length === 0 ||
      [...compBF].flat().filter((el) => el === +el).length === 0
    ) {
      checkWinner();
      document.body.style.cursor = "auto";
      pads[1].style.cursor = "pointer";
      return;
    }

    if (!x || !y) {
      x = getRnd();
      y = getRnd();
    }

    if (turn.includes("comp") && compLastHit !== null) {
      // comp shoot second time the same ship
      let playerBFstate = [...playerBF];

      if (playerBFstate.flat().toString().includes(compLastHit)) {
        if (Math.random() < 0.4) {
          // chance <40%
          let stop = false;
          for (let i = 0; i < playerBFstate.length; i++) {
            for (let j = 0; j < playerBFstate[i].length; j++) {
              if (playerBFstate[i][j] === compLastHit && !stop) {
                playHit();
                playerBFstate[i][j] = "X";
                let newState = turn + uuid();
                setTurn(newState);
                stop = true;
              }
            }
          }
          setCompLastHit(null);
          setPlayerBF(playerBFstate);
          return;
        } else setCompLastHit(null);
      }
    }

    let newBF = turn === "player" ? [...compBF] : [...playerBF];
    let el = newBF[y - 1][x - 1];
    if (+el === el) {
      // hit the target
      turn.includes("comp") && setCompLastHit(el);
      newBF[y - 1][x - 1] = "X";
      playHit();
      turn === "player" ? setCompBF(newBF) : setPlayerBF(newBF);
      turn === "player" ? setAlarm("playerHits") : setAlarm("compHits");

      if (turn.includes("comp")) {
        let newState = turn + uuid();
        setTimeout(() => setTurn(newState), 999);
      }
    } else if (el === "X" || el === "*") {
      // shoot second time the same point
      if (turn.includes("comp")) {
        let newState = turn + uuid();
        setTurn(newState);
      }
      return;
    } else {
      // miss the target
      newBF[y - 1][x - 1] = "*";
      playMiss();
      turn === "player" ? setCompBF(newBF) : setPlayerBF(newBF);
      turn === "player" ? setAlarm("playerMissed") : setAlarm("compMissed");
      setTimeout(() => {
        if (turn === "player") setTurn("comp");
        else if (turn.includes("comp")) setTurn("player");
      }, 999);
    }
  }

  useEffect(() => {
    if (!turn.includes("player")) {
      try {
        if (pads.length > 1) pads[1].removeEventListener("click", shoot);
      } catch (e) {
        console.log(e);
      }
    }

    if (!turn.includes("win")) checkWinner();

    if (turn === "begin") {
      playFight();
      setTimeout(setTurn.bind(null, "player"), 2000);
    }

    if (turn.includes("player")) {
      document.body.style.cursor = "auto";
      pads[1].style.cursor = "pointer";
      pads[1].addEventListener("click", shoot);
    }

    if (turn.includes("comp")) {
      document.body.style.cursor = "wait";
      pads[1].style.cursor = "wait";
      shootCheck();
    }
  }, [turn]);

  useEffect(() => alarm && setTimeout(() => setAlarm(null), 2000), [alarm]);

  useEffect(() => {
    !timeMachine && setTurnNum(store.getState().length + 1);
    timeMachine && setTimeMachine(false);
  }, [compBF]);

  return (
    <div>
      <div className="time-machine--box">
        {turnNum > 1 && (
          <button className="time-machine--back" onClick={turnBack}>
            &#10094;
          </button>
        )}
        <div className="turn-counter">{turnNum}</div>
      </div>
      <div className="war-info">
        {turn === "begin" && message[lang].begin}
        {turn === "player" && message[lang].playerTurn}
        {turn.includes("comp") && message[lang].compTurn}
        {turn === "winComp" && message[lang].winComp.toUpperCase()}
        {turn === "winPlayer" && message[lang].winPlayer.toUpperCase()}
        &nbsp;
        {alarm === "playerHits" && message[lang].playerHits}
        {alarm === "playerMissed" && message[lang].playerMissed}
        {alarm === "compHits" && message[lang].compHits}
        {alarm === "compMissed" && message[lang].compMissed}
      </div>
    </div>
  );
}
