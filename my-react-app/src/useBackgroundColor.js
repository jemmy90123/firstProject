// useBackgroundColor.js
import { useState } from 'react';

const useBackgroundColor = () => {
  const [backgroundColor, setBackgroundColor] = useState(randcolor());

  const chnage = () => {
    setBackgroundColor(randcolor());
  };

  function randcolor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }

  return [backgroundColor, chnage];
};

export default useBackgroundColor;

