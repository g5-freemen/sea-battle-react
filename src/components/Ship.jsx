import React, {useContext} from 'react';
import { BattlefieldContext } from "./BattlefieldContext";
import uuid from 'react-uuid';

export default function Ship({length, num}) {
  const { bfCoord, playerBF, setPlayerBF } = useContext(BattlefieldContext);

  function handleShipDrag(e) {
      let trg = e.target;
      let coords = getCoords(trg);
      let shiftX = e.pageX - coords.left;
      let shiftY = e.pageY - coords.top;
    
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
        let shipObj = e.target.closest('.ship');
        let shipCol = 0;
        let shipRow = 0;
        let shipX = 0;
        let shipY = 0;

        for (let i=0; i<bfCoord.gridCol.length-1; i++) {
          if (ship.x >= bfCoord.gridCol[i] && ship.x <= bfCoord.gridCol[i+1]) { shipCol = i+1; shipX = bfCoord.gridCol[i]; }
          if (ship.y >= bfCoord.gridRow[i] && ship.y <= bfCoord.gridRow[i+1]) { shipRow = i+1; shipY = bfCoord.gridRow[i]; }
        }

        console.log(ship.x,'x',ship.y,'=',length);
        console.log(shipCol,'xx',shipRow, '==',length);
        
        let putOk = true;
        for(let i=0; i<length; i++) {
          if (playerBF[shipRow-1][shipCol-1+i] !== null) putOk = false; 
        }

        if (putOk) {
          console.log(shipX,'xxx',shipY);

          for(let i=0; i<length; i++)
            playerBF[shipRow-1][shipCol-1+i] = num; 

          setPlayerBF(playerBF);
          shipObj.style.display = 'none';
          // shipObj.style.top = shipY + 'px';
          // shipObj.style.left = shipX + 'px';
        }
        
        if (!putOk) console.log('NOOOOOO')
        else console.log('Ship.jsx',playerBF);

        document.onmousemove = null;
        trg.onmouseup = null;
      };
  }
              
  function getCoords(elem) {
      let box = elem.getBoundingClientRect();
      return {
          top: box.top,
          left: box.left
      };
  };

  return (
  <React.Fragment key={uuid()}>
    <span   className='ship'
            id={uuid()}
            style={{width: length*33}}
            onDragStart={()=>{return false}}
            onMouseDown={handleShipDrag}
            >
    {num}
    </span>
    <span className='ship-margin' />
  </React.Fragment>
  )
}