// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import React, {createContext, useContext, useState} from 'react';

// 🐨 create your CountContext here with React.createContext

// 🐨 create a CountProvider component here that does this:
const CountContext = createContext();

const CountProvider = props => {
  const [count, setCount] = useState(0);
  const value = [count, setCount];

  return <CountContext.Provider value={value} {...props} />;
};

function CountDisplay() {
  const [count] = useContext(CountContext);

  return <div>{`The current count is ${count}`}</div>;
}

function Counter() {
  const [, setCount] = useContext(CountContext);
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
