import React, {useContext, useEffect, useState} from 'react';
import uuid from 'react-uuid';

import { BattlefieldContext } from "./BattlefieldContext";

export default function War() {
    const { message, bfCoord, checkWinner,
            compBF, setCompBF, playerBF, setPlayerBF,
            getRnd, turn, setTurn, 
            turnNum, setTurnNum,
            playHit, playMiss, playFight } = useContext(BattlefieldContext);
    const [ alarm, setAlarm ] = useState(null);
    const pads = document.querySelectorAll('.battlefield-pad');

    function turnBack() {
        alert ('Turn back from ',turnNum,' to prev ',turnNum-1);
    }

    function shoot(ev) {
        let x, y;
        let evX = ev.clientX;
        let evY = ev.clientY;

        for (let i=0; i<bfCoord.gridCol.length-1; i++) { // get player's shoot Col & Row
            if (evX >= bfCoord.gridCol[i] && evX <= bfCoord.gridCol[i+1]) x = i+1;
            if (evY >= bfCoord.gridRow[i] && evY <= bfCoord.gridRow[i+1]) y = i+1;
        };

        shootCheck(x,y);
    } 

    function shootCheck(x,y) {
        if (!x || !y) {
            x = getRnd();
            y = getRnd();
        }

        let newBF = (turn==='player' ? [...compBF] : [...playerBF]);
        let el = newBF[y-1][x-1];
        if (+el===el) {             // hit the target
            newBF[y-1][x-1] = 'X';
            playHit();
            turn==='player' ? setCompBF(newBF) : setPlayerBF(newBF);
            turn==='player' ? setAlarm('playerHits') : setAlarm('compHits');

            if (turn.includes('comp')) {
                let newState = turn+(uuid());
                setTimeout(()=>{
                    setTurn(newState);
                    return;
                }, 999);
            }
        } else if (el==='X' || el==='*') {
             // shoot second time the same point
            if (turn.includes('comp')) {
                let newState = turn+(uuid());
                setTimeout(()=> {
                    setTurn(newState)
                    return;
                }, 333);
            }
        } else {                    // miss the target
                newBF[y-1][x-1] = '*';
                playMiss();
                turn==='player' ? setCompBF(newBF) : setPlayerBF(newBF);
                turn==='player' ? setAlarm('playerMissed') : setAlarm('compMissed');
            setTimeout(() => {
                if (turn==='player') setTurn('comp')
                else if (turn.includes('comp')) setTurn('player');
                return; 
            }, 999);
        }
    }

    useEffect( () => {
        checkWinner();

        if (turn.includes('win')) {
            try {
                pads[1].removeEventListener('click',shoot);
            }
            catch(e) {
                console.log(e);
            }
            
            return;
        }

        if (turn === 'begin') {
            playFight();
            setTimeout( setTurn.bind(null,'player'), 2000);
        };

        if (turn.includes('player')) {
            document.body.style.cursor = 'auto';
            pads[1].style.cursor = 'pointer';
            pads[1].addEventListener('click',shoot);
        }

        if (turn.includes('comp')) {
            pads[1].removeEventListener('click',shoot);
            document.body.style.cursor = 'wait';
            pads[1].style.cursor = 'wait';
            shootCheck()
        }
    }, [turn]);

    useEffect(()=> {
        alarm &&
            setTimeout(() => setAlarm(null), 2000);       
    }, [alarm]);

    useEffect(() => setTurnNum(prev=> prev+1), [compBF] )

    return (
        <React.Fragment>
        <div className='time-machine--box'>
            {turnNum>1 && 
                <button className='time-machine--back'
                        onClick={turnBack}>
                    &#10094;
                </button>
            }
            <div className='turn-counter'>
                {turnNum}
            </div>
        </div>
        <div className='war-info'>
            { turn === 'begin' && message.begin }
            { turn.includes('player') && message.playerTurn }
            { turn.includes('comp') && message.compTurn }
            { turn === 'winComp' && message.winComp }
            { turn === 'winPlayer' && message.winPlayer }
            &nbsp;
            { alarm === 'playerHits' && message.playerHits }
            { alarm === 'playerMissed' && message.playerMissed }
            { alarm === 'compHits' && message.compHits }
            { alarm === 'compMissed' && message.compMissed }
        </div>
        </React.Fragment>
    )
}