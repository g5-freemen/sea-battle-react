import React, { useEffect, useState } from 'react';
export const BattlefieldContext = React.createContext({});

const Provider = BattlefieldContext.Provider;

export default function ContextApp ({ children }) {
    const [ arrangeShips, setArrangeShips ] = useState(true);
    const [ playerBF, setPlayerBF ] = useState(Array(10).fill('-').map(() => Array(10).fill('-')));
    const [ compBF, setCompBF ] = useState(Array(10).fill('-').map(() => Array(10).fill('-')));
    const [ bfCoord, setBFcoord ] = useState({});

    function getBFcoord() {
        let box = document.querySelector('.battlefield-pad').getBoundingClientRect();
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

    useEffect(()=> getBFcoord(), [])

    return (
        <Provider value={{
            arrangeShips, setArrangeShips,
            playerBF, setPlayerBF,
            compBF, setCompBF,
            bfCoord
        }}>
            {children}
        </Provider>
    );
};