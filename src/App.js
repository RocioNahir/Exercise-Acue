import './App.css';

function App() {
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
          {"I need to be update from my child"}
        </div>
        <div>
          <p>Child</p>
          <button>Change Parent Value</button>
        </div>
      </body>
    </div>
  );
}

export default App;
