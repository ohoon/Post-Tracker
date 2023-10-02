import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useAppSelector } from "./app/hooks";
import {
    selectTrackInfoDict,
} from "./features/track_info/trackInfoSlice";

import { Input } from "./components/track_info/Input";
import { Output } from './components/track_info/Output';
import { OutputControl } from "./components/track_info/OutputControl";
import { Footer } from "./components/footer/Footer";

function App() {
  const trackInfoDict = useAppSelector(selectTrackInfoDict);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Post Tracker</h1>
        <Input />
        {Object.keys(trackInfoDict).length > 0 && <>
          <hr/>
          <OutputControl/>
          <Output />
        </>}
      </header>
      <Footer />
    </div>
  );
}

export default App;
