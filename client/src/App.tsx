import React from 'react';
import logo from './logo.svg';
import { InputSingle } from './components/track_info/InputSingle';
import { Output } from './components/track_info/Output';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <InputSingle />
        <Output />
      </header>
    </div>
  );
}

export default App;
