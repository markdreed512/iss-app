import React, { useState } from 'react';
import './App.css';
import IssMap from './components/IssMap'
import Home from './components/Home'
import Input from './components/Input'
import NavBar from './components/NavBar'
function App() {
  const [ page, setPage ] = useState("input")
  const handleNavClick = (e) => {
    setPage(e.currentTarget.id)
  }

  return (
    <div className="App">
      <NavBar handleClick={handleNavClick}/>
      { page === "input"? <Input /> :
        page === "map"? <IssMap /> : <Home />
      }
      
     
    </div>
  );
}

export default App;
