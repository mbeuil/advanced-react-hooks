// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import React, {createContext, useContext, useState} from 'react';

const CountContext = createContext();

const CountProvider = props => {
  const [count, setCount] = useState(0);
  const value = [count, setCount];

  return <CountContext.Provider value={value} {...props} />;
};

const useCount = () => {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error('useCount must be used withon a context provider');
  }

  return context;
};

function CountDisplay() {
  const [count] = useCount();

  return <div>{`The current count is ${count}`}</div>;
}

function Counter() {
  const [, setCount] = useCount();
  const increment = () => setCount(c => c + 1);

  return <button onClick={increment}>Increment count</button>;
}

function App() {
  return (
    <CountProvider>
      <CountDisplay />
      <Counter />
    </CountProvider>
  );
}

export default App;
