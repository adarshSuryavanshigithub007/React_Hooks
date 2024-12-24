import React, { useContext } from 'react'
import { useAppContext } from './Context/AppContextProvider';

const Count = () => {
    const {count, setCount} = useAppContext()

    const increment = () => {
        setCount(count + 1);
    };
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    );
}

export default Count