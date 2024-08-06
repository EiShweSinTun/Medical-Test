import { useState } from 'react';
import abdominalDefault from './images/abs/default-abs.png';

const Abdominal = () => {
  const [highlighted, setHighlighted] = useState(false);
  const [active, setActive] = useState(false);

  const handleMouseEnter = () => setHighlighted(true);
  const handleMouseLeave = () => setHighlighted(false);
  const handleClick = () => setActive(!active);

  return (
    <div className="flex flex-col items-center">
      <div className="relative group">
        <img
          src={abdominalDefault}
          alt="Abdominal Area"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          className="cursor-pointer w-full max-w-md"
        />
        <span className="absolute inset-0 flex items-center justify-center text-center text-white">
          {highlighted ? 'Abdominal Area' : ''}
        </span>
      </div>
      {/* {active && (
        <img
          src={abdominalActive}
          alt="Abdominal Active"
          className="mt-2 w-full max-w-xs"
        />
      )} */}
    </div>
  );
};

export default Abdominal;