import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Input } from "./components/track_info/Input";
import { Output } from './components/track_info/Output';
import { OutputControl } from "./components/track_info/OutputControl";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Post Tracker</h1>
        <Input />
        <hr/>
        <OutputControl/>
        <Output />
      </header>
    </div>
  );
}

export default App;
