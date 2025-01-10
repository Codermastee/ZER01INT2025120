import { useState } from 'react';
function useBackgroundColor(initialColor) {
  const [color, setColor] = useState(initialColor);
  const changeColor = (newColor) => {
    setColor(newColor);
  };
  const resetColor = () => {
    setColor(initialColor);
  };

  return [color, changeColor, resetColor];
}

export default useBackgroundColor;
