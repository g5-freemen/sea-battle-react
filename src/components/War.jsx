import React, {useContext, useEffect, useState} from 'react';

import { BattlefieldContext } from "./BattlefieldContext";

export default function War() {
    const { message, bfCoord, compBF, setCompBF, playerBF, setPlayerBF } = useContext(BattlefieldContext);
    const [ turn, setTurn ] = useState('begin'); //begin,player,comp
    const [ alarm, setAlarm ] = useState(null);

    useEffect( () => {
        console.log('turn=',turn)
        if (turn === 'begin') {
        setTimeout(()=>{
            setTurn('player');
        }, 2500)
        }

        const pads = document.querySelectorAll('.battlefield-pad');

        if (turn.includes('player')) {
            pads[1].style.cursor = 'pointer';
            pads[1].addEventListener('click',(ev) => {
                let x;
                let y;
                let evX = ev.clientX;
                let evY = ev.clientY;
        
                for (let i=0; i<bfCoord.gridCol.length-1; i++) { // get shoot Col & Row
                    if (evX >= bfCoord.gridCol[i] && evX <= bfCoord.gridCol[i+1]) x = i+1;
                    if (evY >= bfCoord.gridRow[i] && evY <= bfCoord.gridRow[i+1]) y = i+1;
                };

                let newBF = [...compBF];
                let el = newBF[y-1][x-1];
                
                if (+el===el) {
                    newBF[y-1][x-1]='X'
                    setCompBF(newBF);
                    setAlarm('playerHits');         
                } else {
                    newBF[y-1][x-1]='*';
                    setCompBF(newBF);
                    setAlarm('playerMissed');  
                    setTurn('comp');
                }




            } );
        }
        if (turn.includes('comp')) {
            document.body.style.cursor = 'wait';
            pads[1].style.cursor = 'wait';
            console.log('player=',pads[0]);

        }
    }, [turn]);

    useEffect(()=> {
        if (alarm) {
            setTimeout(() => {
                setAlarm(null);
            }, 2000);
        }
    }, [alarm])

    return (
        <div className='war-info'>
            { turn === 'begin' && message.begin }
            { turn === 'player' && message.playerTurn }
            { turn === 'comp' && message.compTurn }
            &nbsp;
            { alarm === 'playerHits' && message.playerHits }
            { alarm === 'playerMissed' && message.playerMissed }
            { alarm === 'compHits' && message.compHits }
            { alarm === 'compMissed' && message.compMissed }
        </div>
    )
    
}