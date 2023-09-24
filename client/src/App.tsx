import React from 'react';

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Input } from "./components/track_info/Input";
import { Output } from './components/track_info/Output';
import { OutputControl } from "./components/track_info/OutputControl";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Input />
        <hr/>
        <OutputControl/>
        <Output />
      </header>
    </div>
  );
}

export default App;
