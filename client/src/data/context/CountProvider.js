import React, { createContext, useState } from 'react'
export const CounterContext = createContext();

export const CountProvider = ({children}) => {
    const [count, setCount] = useState(0);

    const valueToShare = {
        count: count,
        incrementCount: () => {
            setCount(count+1);
        }
    };

  return (
    <CounterContext.Provider value={valueToShare}>
        {children}
    </CounterContext.Provider>
  );
}
