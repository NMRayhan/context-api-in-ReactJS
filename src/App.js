import './App.css';
import { createContext, useState } from 'react';
import Base from './Components/Base/Base';

export const categoryContext = createContext()

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <categoryContext.Provider value={[count, setCount]} >
        <h1>Count : {count}</h1>
        <Base></Base>
      </categoryContext.Provider>
    </div>
  );
}

export default App;
