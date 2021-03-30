import React, { useEffect, useState } from 'react';
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
    const SHIPS_DATA = [ [1, 4], [2, 3], [3, 2], [4, 1] ];

    const message = {
        playerTurn: 'Ваш ход!',
        compTurn: 'Ход компьютера!',
        begin: 'Да начнётся битва!',
        playerHits: 'Вы попали!',
        playerMissed: 'Вы промахнулись!',
        compHits: 'Компьютер попал!',
        compMissed: 'Компьютер промахнулся!'
    }

    function createShips(data) {
        let n=0;
        for (let item of data) 
            for (let i=0; i<item[0]; i++) {
                let ship = { num: n++, length: item[1] }
                setPlayerShips(prev => prev ? prev.concat(ship) : [ship]);
                setCompShips(prev => prev ? prev.concat(ship) : [ship]);
            }
    };

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
        createShips(SHIPS_DATA);
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
        }}>
            {children}
        </Provider>
    );
};