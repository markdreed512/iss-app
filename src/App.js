import React, { useState } from 'react';
import './App.css';
import MapView from './components/MapView'
import Home from './components/Home'
import PassesView from './components/PassesView'
import NavBar from './components/NavBar'
import Modal from './components/ErrorModal'

function App() {
  const [ page, setPage ] = useState("input")
  
  const handleNavClick = (e) => {
    console.log(e.currentTarget)
    setPage(e.currentTarget.id)
  }

  return (
    <>
      <NavBar handleClick={handleNavClick}/>
      { page === "input"? <PassesView /> :
        page === "map"? <MapView /> : <Home />
      }
    </>
  );
}

export default App;
