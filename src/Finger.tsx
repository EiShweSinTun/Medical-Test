import React, { useEffect, useState } from 'react';

import fingerDefault from './images/finger/default-finger.png';
import fingerDip from './images/finger/dip-highlight.png';
import fingerMcp from './images/finger/mcp-highlight.png';
import fingerPip from './images/finger/pip-highlight.png';
import dipActive from './images/finger/dip-active.png';
import mcpActive from './images/finger/mcp-active.png';
import pipActive from './images/finger/pip-active.png';
import useMouse from '@react-hook/mouse-position';
import highlight from './images/finger/others-highlight.png';

const Finger = () => {
    const ref = React.useRef(null);
    const mouse = useMouse(ref);
    const [highlightedZone, setHighlightedZone] = useState<string[] | null>(null);
    const [activeZone, setActiveZone] = useState<string | null>(null);

    const zones = {
      MCP: { xMin: 240, xMax: 275, yMin: 180, yMax: 208 },
      MCP2: { xMin: 200, xMax: 235, yMin: 180, yMax: 205 },
      MCP3: { xMin: 240, xMax: 275, yMin: 180, yMax: 208 },
      MCP4: { xMin: 240, xMax: 275, yMin: 180, yMax: 208 },
      MCP5: { xMin: 240, xMax: 275, yMin: 180, yMax: 208 },
      DIP: { xMin: 50, xMax: 150, yMin: 200, yMax: 300 },
      PIP: { xMin: 246, xMax: 276, yMin: 112, yMax: 128 },
      HL: { xMin: 63, xMax: 371, yMin: 476, yMax: 520 }
    };
    
    const handleMouseMove = (e : any) => {

      if (!ref.current) return;

      const { x, y } = mouse;

      console.log(x,y)

      let zone = null;

      for (const [key, bounds] of Object.entries(zones)) {
        if(x !== null && y !== null){
          if (x >= bounds.xMin && x <= bounds.xMax && y >= bounds.yMin && y <= bounds.yMax) {
            zone = key;
            break;
          }
        }
        
      }
      setHighlightedZone(zone ? [zone] : null);
    };
  
    const handleMouseLeave = () => {
      setHighlightedZone(null);
    }
  
    const handleClick = () => {
      setActiveZone(highlightedZone && highlightedZone[0] !== 'HL' ? highlightedZone[0] : null);
    };

    const allHighlighted = (zone : string) => {
      if(zone === 'HL'){
        setHighlightedZone(Object.keys(zones));
      }
    }

  const getHighlightImage = (zone : string) => {
    switch (zone) {
      case 'DIP':
        return fingerDip;
      case 'MCP5': 
       return fingerMcp;
      case 'MCP4': 
       return fingerMcp;
       case 'MCP3': 
       return fingerMcp;
      case 'MCP2': 
       return fingerMcp;
      case 'MCP':
        return fingerMcp;
      case 'PIP':
        return fingerPip;
      case 'HL' :
        return highlight;
      default:
        return undefined;
    }
  };

  const getActiveImage = () => {
    switch (activeZone) {
        case 'DIP':
            return dipActive;
        case 'MCP':
        case 'MCP2':
        case 'MCP3':
        case 'MCP4':
        case 'MCP5':
            return mcpActive;
        case 'PIP':
            return pipActive;
        default:
            return undefined;
    }
};

  useEffect(()=>{
    highlightedZone === null && setActiveZone(null);
  },[highlightedZone]);

  return (
    <div className="flex flex-col items-center">
      <div
        ref={ref}
        className="relative group"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <img
          src={fingerDefault}
          alt="Finger Area"
          className="w-full max-w-md"
        />
        {highlightedZone && (
            <>
              {highlightedZone.map((zone) => (
                <img
                  key={zone}
                  src={getHighlightImage(zone)}
                  alt={`${zone} Highlighted`}
                  className="absolute top-0 left-0 w-full h-auto cursor-pointer"
                  onClick={() => allHighlighted(zone)}
                />
              ))}
            </>
        )}
        {activeZone && (
          <img
            src={getActiveImage()}
            alt={`${activeZone} Active`}
            className="absolute top-0 left-0 w-full h-auto cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default Finger;
