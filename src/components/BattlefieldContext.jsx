import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import mp3Hit from '../sound/hit.mp3';
import mp3Miss from '../sound/miss.mp3';
import mp3Fight from '../sound/fight.mp3';
import mp3winComp from '../sound/winComp.mp3';
import mp3winPlayer from '../sound/winPlayer.mp3';
export const BattlefieldContext = React.createContext({});

const Provider = BattlefieldContext.Provider;

export default function ContextApp ({ children }) {
    const [ arrangeShips, setArrangeShips ] = useState(true);
    const [ arrangeShipsMode, setArrangeShipsMode ] = useState('begin');
    const [ playerBF, setPlayerBF ] = useState(Array(10).fill('-').map(() => Array(10).fill('-')));
    const [ compBF, setCompBF ] = useState(Array(10).fill('-').map(() => Array(10).fill('-')));
    const [ bfCoord, setBFcoord ] = useState({});
    const [ playerShips, setPlayerShips ] = useState(null);
    const [ compShips, setCompShips ] = useState(null);
    const [ turn, setTurn ] = useState('begin'); //begin,player,comp
    const [ turnNum, setTurnNum ] = useState(0);

    const message = {
        playerTurn: 'Ваш ход!',
        compTurn: 'Ход компьютера!',
        begin: 'Да начнётся битва!',
        playerHits: 'Вы попали!',
        playerMissed: 'Вы промахнулись!',
        compHits: 'Компьютер попал!',
        compMissed: 'Компьютер промахнулся!',
        winPlayer: 'Вы победили!'.toUpperCase(),
        winComp: 'Компьютер победил!'.toUpperCase(),
    };

    const [playHit] = useSound(mp3Hit);
    const [playMiss] = useSound(mp3Miss);
    const [playFight] = useSound(mp3Fight);
    const [playWinComp]= useSound(mp3winComp);
    const [playWinPlayer]= useSound(mp3winPlayer);
    
    function checkWinner() {
        if (turn.includes('comp') || turn.includes('player')) {
            if ([...playerBF].flat().filter(el=> el===+el).length === 0) {
                playWinComp();
                setTurn('winComp');
            }
            if ([...compBF].flat().filter(el=> el===+el).length === 0) {
                playWinPlayer();
                setTurn('winPlayer');
            }
        return;
        }
    }

    function createShips() {
        const data = [ [1, 4], [2, 3], [3, 2], [4, 1] ];
        let n=0;
        for (let item of data) 
            for (let i=0; i<item[0]; i++) {
                let ship = { num: n++, length: item[1] }
                setPlayerShips(prev => prev ? prev.concat(ship) : [ship]);
                setCompShips(prev => prev ? prev.concat(ship) : [ship]);
            }
    };

    function getRnd(i=0) {
        while (i<1 || i>10) {
          i = Math.ceil(Math.random()*10)
        }
        return i;
    }

    function getBFcoord(box) {
        let data = {
          top: box.top,
          bottom: box.bottom,
          left: box.left,
          right: box.right,
          width: box.width,
          height: box.height,
          gridCol: new Array(11).fill(0).map((el,idx) => box.left + idx * box.width/10),
          gridRow: new Array(11).fill(0).map((el,idx) => box.top + idx * box.height/10)
        };
        setBFcoord(data);
      }

    useEffect(()=> {
        let elem = document.querySelector('.battlefield-pad').getBoundingClientRect();
        createShips();
        getBFcoord(elem);
        
    }, [])

    useEffect(()=> {
        if (arrangeShips===false) {
            let elem = document.querySelectorAll('.battlefield-pad')[1].getBoundingClientRect();
            getBFcoord(elem);
        }
    }, [arrangeShips])

    return (
        <Provider value={{
            arrangeShips, setArrangeShips,
            arrangeShipsMode, setArrangeShipsMode,
            playerBF, setPlayerBF,
            compBF, setCompBF,
            playerShips, setPlayerShips,
            compShips, setCompShips,
            bfCoord,
            message,
            turn, setTurn,
            turnNum, setTurnNum,
            getRnd, playHit, playMiss, playFight, checkWinner
        }}>
            {children}
        </Provider>
    );
};