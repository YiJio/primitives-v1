import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import './theme.css';

import Component from './Component';
import RoutesList from './Routes';

function App() {
  const [isDarkMode, setDarkMode] = useState(false);


  return (
    <div style={{ background: (isDarkMode ? "#000" : "#fff") }}>
      <Router>
        <RoutesList/>
      </Router>
      {/*<div onClick={(e) => setDarkMode(!isDarkMode)}>Toggle mode</div>
        <Component />*/}
    </div>
  );
}

export default App;
