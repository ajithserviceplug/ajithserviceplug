import React from 'react';
import './App.css';
import Home from "./Components/Home";
import Header from './Components/Header';

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="App">
        <Home />
      </div>
    </React.Fragment>

  );
}

export default App;
