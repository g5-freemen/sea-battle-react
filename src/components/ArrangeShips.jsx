import React, {useEffect, useContext} from 'react';
import { BattlefieldContext } from "./BattlefieldContext";
import uuid from 'react-uuid';
import Ship from './Ship';

export default function ArrangeShips() {
    const { playerShips, arrangeShipsMode, setArrangeShipsMode, setArrangeShips } = useContext(BattlefieldContext);

    function handleKeyboard(ev) {
        if (ev.key==='1') setArrangeShipsMode('manual')
        else if (ev.key==='2') setArrangeShipsMode('auto');
    }

    document.addEventListener('keydown',handleKeyboard);

    useEffect( () => {
        if (playerShips && playerShips.length===0)
            setArrangeShipsMode('playerReady');
    } , [playerShips]);

    useEffect( () => {
        if (arrangeShipsMode==='playerReady') setArrangeShips(false);
    }, [arrangeShipsMode] )

    return (
        <div className='battlefield-menu'>

            { (arrangeShipsMode==='begin' || arrangeShipsMode==='manual' || arrangeShipsMode==='auto') &&
             <p className='battlefield-menu--title'>Расстановка кораблей
                {arrangeShipsMode === 'manual' && <span>: вручную</span>}
                {arrangeShipsMode === 'auto' && <span>: авто</span>}
            </p> }

            {arrangeShipsMode === 'manual' &&
                <span className='battlefield-menu--remark'>
                    Кликните на корабль левой кнопкой мыши чтобы выбрать его<br/>
                    Кликните на корабль правой кнопкой мыши чтобы повернуть его
                </span>}

            { arrangeShipsMode === 'begin' &&
            <ul className='battlefield-menu--list'>
                <li onClick={()=>setArrangeShipsMode('manual')}> 1) Вручную </li>
                <li onClick={()=>setArrangeShipsMode('auto')}> 2) Автоматически </li>
            </ul>
            }

            { (arrangeShipsMode==='manual' || arrangeShipsMode==='auto') &&
                <div className='battlefield-menu--ships'>
                    { playerShips.map(ship =>
                        <Ship key={uuid()} length={ship.length} num={ship.num} /> )
                    }
                </div>
            }

        </div>
    )
}