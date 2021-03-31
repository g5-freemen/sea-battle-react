import React, {useContext, useEffect, useState} from 'react';
import uuid from 'react-uuid';

import { BattlefieldContext } from "./BattlefieldContext";

export default function War() {
    const { message, bfCoord, compBF, setCompBF, playerBF, setPlayerBF,
            getRnd, turn, setTurn, checkWinner,
            playHit, playMiss, playFight } = useContext(BattlefieldContext);
    const [ alarm, setAlarm ] = useState(null);

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

            if (turn==='comp') {
                setTimeout(() => {
                    setTurn('comp '+uuid());
                }, 999);
            }
            return;
        } else if (el==='X' || el==='*') { // shoot second time the same point
            turn.includes('comp') && setTurn('comp '+uuid());
            return;  
        } else {                    // miss the target
            newBF[y-1][x-1] = '*';
            playMiss();
            turn==='player' ? setCompBF(newBF) : setPlayerBF(newBF);
            turn==='player' ? setAlarm('playerMissed') : setAlarm('compMissed');
            setTimeout(() => {
                turn==='player' ? setTurn('comp') : setTurn('player');                
            }, 999);
            return; 
        }
    }


    useEffect( () => {
        if (turn === 'begin') {
            playFight();
            setTimeout( setTurn.bind(null,'player'), 2000)
        };

        checkWinner();
        console.log('turn=',turn)

        const pads = document.querySelectorAll('.battlefield-pad');

        if (turn.includes('player')) {
            document.body.style.cursor = 'auto';
            pads[1].style.cursor = 'pointer';
            pads[1].addEventListener('click',(ev) => {
                let x, y;
                let evX = ev.clientX;
                let evY = ev.clientY;
        
                for (let i=0; i<bfCoord.gridCol.length-1; i++) { // get player's shoot Col & Row
                    if (evX >= bfCoord.gridCol[i] && evX <= bfCoord.gridCol[i+1]) x = i+1;
                    if (evY >= bfCoord.gridRow[i] && evY <= bfCoord.gridRow[i+1]) y = i+1;
                };

                shootCheck(x,y);
            } )
        }

        if (turn.includes('comp')) {
            document.body.style.cursor = 'wait';
            pads[1].style.cursor = 'wait';

            shootCheck()
        }
    }, [turn]);

    useEffect(()=> {
        if (alarm) {
            setTimeout(setAlarm.bind(null,null), 2000);
        }
    }, [alarm])

    return (
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
    )
}