import { useState } from 'react';
import '../style/App.css';
import Children from './Children';

function App() {
  const [change, setChange] = useState("I need to be update from my child")

  function handleClickChildren(value) {
    setChange(value);
  }

  return (
    <main className="wrapperAll">
      <h1>{"Update Parent State Challenge (Using Callback)"}</h1>   
      <section className='wrapperAll_body'>
        <div className='wrapperAll_body--module'>
          <h2>Parent</h2>
          <p>{change}</p>
        </div>
        <div className='wrapperAll_body--module'>
          <h2>Child</h2>
          <Children handleClickChildren = {handleClickChildren}/>
        </div>
      </section>
    </main>
  );
}

export default App;
