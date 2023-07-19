import React, { createContext, useState } from 'react';

const BackgroundColorContext = createContext();

const BackgroundColorProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState('#f0f0f0'); // Default background color is white (#ffffff)

  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <BackgroundColorContext.Provider value={{ backgroundColor, changeBackgroundColor }}>
      {children}
    </BackgroundColorContext.Provider>
  );
};

export { BackgroundColorContext, BackgroundColorProvider };
