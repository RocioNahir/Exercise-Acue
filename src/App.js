import { useState } from 'react';
import './App.css';
import Children from './Children';

function App() {
  const [change, setChange] = useState("I need to be update from my child")

  function handleClickChildren(value) {
    setChange(value);
  }

  return (
    <div className="App">
      <header>
        <b>
          {"Update Parent State Challenge (Using Callback)"}
        </b>
      </header>
      <body>
        <div>
          <p>Parent</p>
          {change}
        </div>
        <div>
          <p>Child</p>
          <Children handleClickChildren = {handleClickChildren}/>
        </div>
      </body>
    </div>
  );
}

export default App;
