import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './component/counter';
import CounterGroup from './component/counterGroup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterGroup />
      </header>
    </div>
  );
}

export default App;
