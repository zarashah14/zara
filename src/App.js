
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
    <div className="searchSection">
          <h1>Search for a Game</h1>
          <input type="text" placeholder='MineCraft..'/>
          <button>Search Game Title</button>
    </div>
    <div className='dealsSection'>
       <h1>Latest Deal</h1>
    </div>
    </div>
  );
}

export default App;
