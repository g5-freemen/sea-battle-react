import React, {useContext} from 'react';
import uuid from 'react-uuid';

import { BattlefieldContext } from "./BattlefieldContext";

import ArrangeShips from './ArrangeShips';
import DrawIdx from './DrawIdx';
import War from './War';

export default function Battlefield() {
    const { arrangeShips, playerBF, compBF } = useContext(BattlefieldContext);

    return (
        <React.Fragment>
        <div className='container'>
            <div className='battlefield'>
                <DrawIdx type='digits'/>
                <DrawIdx type='letters'/>
                <div className='battlefield-pad'>
                    { playerBF.length === 10 &&
                    playerBF.flat().map(el=>
                        <span 
                            className={+el===el ? 'shipEl' : el==='D' ? 'deadarea' : el==='X' ? 'hit' : 'empty'}
                            key={uuid()}
                        >
                            { el==='*' && el }
                        </span>) }
                </div>
            </div>

            { arrangeShips && <ArrangeShips/> }

            { !arrangeShips &&
                <div className='battlefield battlefield--comp'>
                    <DrawIdx type='digits'/>
                    <DrawIdx type='letters'/>
                    <div className='battlefield-pad'>
                    { compBF.length === 10 &&
                        compBF.flat().map(el=>
                            <span   
                                className={el==='X' ? 'hit' : 'empty'}
                                key={uuid()} >
                                    { el==='*' && el }
                            </span>) }
                    </div>
                </div>
            }
        </div>

        { !arrangeShips && <War/>}

        <footer className="footer">
            <a className="footer__link" href="https://github.com/g5-freemen">
                    Made by Anton Borkovskij, 2021
            </a>
        </footer>
        </React.Fragment>
    )
}