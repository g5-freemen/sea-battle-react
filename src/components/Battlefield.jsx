import React, {useCallback, useContext, useEffect, useState} from 'react';
import uuid from 'react-uuid';

import { BattlefieldContext } from "./BattlefieldContext";

import ArrangeShips from './ArrangeShips';
import DrawIdx from './DrawIdx';

export default function Battlefield() {
    const { arrangeShips } = useContext(BattlefieldContext);
    const { playerBF } = useContext(BattlefieldContext);


    useEffect(() => console.log('playerBF=',playerBF),[playerBF]);

    return (
        <div className='container'>
            <div className='battlefield'>
                <DrawIdx type='digits'/>
                <DrawIdx type='letters'/>
                <div className='battlefield-pad'>
                    { playerBF.length === 10 &&
                    playerBF.flat().map(el=> <span className={el!==+el ? 'empty' : 'shipEl'} key={uuid()}>{el===+el ? +el: '.'}</span>) }
                </div>
            </div>

            { arrangeShips && <ArrangeShips/> }

            { !arrangeShips &&
                <div className='battlefield'>
                <DrawIdx type='digits'/>
                <DrawIdx type='letters'/>
                <div className='battlefield-pad'>
                    {new Array(100).fill(0).map((el,idx) => <span key={uuid()} style={{fontSize:'6px'}}>{idx}</span>)}
                </div>
            </div>
            }

        </div>
    )
}