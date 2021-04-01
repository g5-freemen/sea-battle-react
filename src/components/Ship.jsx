import React, {useState, useContext, useEffect} from 'react';
import { BattlefieldContext } from "./BattlefieldContext";
import uuid from 'react-uuid';

export default function Ship({length, num}) {
  const { setPlayerShips, setCompShips,
        compBF, setCompBF, bfCoord, playerBF,
        setPlayerBF, arrangeShipsMode, getRnd } = useContext(BattlefieldContext);
  const [ orientY, setOrientY ] = useState(arrangeShipsMode!=='auto' ? false : Math.random()>.5 );

  function checkSetShip(shipCol,shipRow,trg,comp) {
    let putOk = true;
    for(let i=0; i<length; i++) {
        try {
          if (!comp) {
            if (!orientY && playerBF[shipRow-1][shipCol-1+i] !== '-') putOk = false;
            if (orientY && playerBF[shipRow-1+i][shipCol-1] !== '-') putOk = false;
          } else {
            if (!orientY && compBF[shipRow-1][shipCol-1+i] !== '-') putOk = false;
            if (orientY && compBF[shipRow-1+i][shipCol-1] !== '-') putOk = false;
          }
        }
        catch (e) {
          putOk = false;
        }
    }

    if (putOk) {
      let newBF = comp ? [...compBF] : [...playerBF];

      for(let i=0; i<length; i++) {  // set ship in array BF
        if (!orientY)
          newBF[shipRow-1][shipCol-1+i] = num
        else
          newBF[shipRow-1+i][shipCol-1] = num;
      };

      for (let a=0; a<3; a++) {
        for(let i=0; i<length+2; i++) {  // set ship's deadarea in array BF
          let coordY, coordX;
            if (!orientY) { 
              coordY = shipRow-2+a;
              coordX = shipCol-2+i;
            } else {
              coordY = shipRow-2+i;
              coordX = shipCol-2+a;
            }

            if (coordY<0 || coordX<0 || coordY>9 || coordX>9) continue;
              
            let el = newBF[coordY][coordX];
            if (el===undefined) continue;

            if (el!==+el && el!=='D') newBF[coordY][coordX]='D';
        }
      }

      if (!comp) {
        setPlayerBF(newBF);
        setPlayerShips(prev => prev.filter(el=> el.num!==num));
      } else {
        setCompBF(newBF);
        setCompShips(prev => prev.filter(el=> el.num!==num));
      }
      document.onmousemove = null;
      if (trg) trg.onmouseup = null;
    }

    if (!putOk) { // retry to set ship if bad position (auto set & comp bf) 
      if (!comp && arrangeShipsMode==='auto') {
        checkSetShip(getRnd(),getRnd(),null)
      } else if (comp) {
        checkSetShip(getRnd(),getRnd(),null,true)
      }
    }
  }

  function handleShipMove(e) {
      if (e.button !== 0) return;
      let trg = e.target;
      let box = trg.getBoundingClientRect();
      let shiftX = e.pageX - box.left;
      let shiftY = e.pageY - box.top;
      
      trg.style.position = 'absolute';
      trg.style.zIndex = 9;

      moveAt(e);
    
      function moveAt(e) {
        trg.style.left = e.pageX - shiftX + 'px';
        trg.style.top = e.pageY - shiftY + 'px';
      }
    
      document.onmousemove = e => moveAt(e);

      trg.onmouseup = function(e) {
        let ship = e.target.closest('.ship').getBoundingClientRect();
        let shipCol;
        let shipRow;

        for (let i=0; i<bfCoord.gridCol.length-1; i++) { // get ship's start position Col & Row
          if (ship.x >= bfCoord.gridCol[i] && ship.x <= bfCoord.gridCol[i+1]) shipCol = i+1;
          if (ship.y >= bfCoord.gridRow[i] && ship.y <= bfCoord.gridRow[i+1]) shipRow = i+1;
        }

        if (shipCol===undefined || shipRow===undefined || shipCol<1 || shipRow<1) return;
        
        if (arrangeShipsMode!=='auto') checkSetShip(shipCol,shipRow,trg);
      };
  }

  function handleRotate(ev) {
    ev.preventDefault();
    setOrientY(prev=>!prev);
  }
           
  useEffect( () => { // auto set ships for Player and PC 
    if (arrangeShipsMode==='auto') {
      setTimeout(()=> {
        let playerShipSet = playerBF.toString().includes(num);
        if (!playerShipSet) checkSetShip(getRnd(),getRnd(),null);
      },num*500);
    };
    let compShipSet = compBF.toString().includes(num);
    if (!compShipSet) checkSetShip(getRnd(),getRnd(),null,true);
  }, [playerBF,compBF] );

  return (
  <React.Fragment key = {uuid()}>
    <span   className = 'ship'
            id = {uuid()}
            style = {!orientY ? {width: length*33, height: 33} : {width: 33, height: length*33}}
            onDragStart = { () => {return false} }
            onMouseDown = {handleShipMove}
            onContextMenu = {handleRotate}
    />
    <span className='ship-margin' />
  </React.Fragment>
  )
}