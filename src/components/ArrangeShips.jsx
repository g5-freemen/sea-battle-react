import React, {useState} from 'react';
import uuid from 'react-uuid';
import Ship from './Ship';

export default function ArrangeShips() {
    const [ arrangeShipsMode, setArrangeShipsMode ] = useState(null);
    const [ playerShips, setPlayerShips ] = useState([]);
    const SHIPS_DATA = [ [1, 4], [2, 3], [3, 2], [4, 1] ];

    function createShips(data) {
        let n=1;
        for (let item of data) 
            for (let i=0; i<item[0]; i++) {
                let ship = { num: n++, length: item[1] }
                setPlayerShips(prev=>prev.concat(ship));
            }
    }

    function handleGameMode(mode) {
        setArrangeShipsMode(mode);
        createShips(SHIPS_DATA);
    }

    return (
        <div className='battlefield-menu'>
            <p>
                Расстановка кораблей
                {arrangeShipsMode === 'manual' && <span>: вручную</span>}
                {arrangeShipsMode === 'auto' && <span>: авто</span>}
            </p>

            { !arrangeShipsMode &&
            <ul className='battlefield-menu--list'>
                <li onClick={handleGameMode.bind(null,'manual')}> 1) Вручную </li>
                <li onClick={handleGameMode.bind(null,'auto')}> 2) Автоматически </li>
            </ul>
            }

            { arrangeShipsMode==='manual' &&
                <div className='battlefield-menu--ships'>
                    { playerShips.map(ship =>
                        <Ship key={uuid()} length={ship.length} num={ship.num} /> ) }
                </div>
            }
                        
        </div>
    )
}