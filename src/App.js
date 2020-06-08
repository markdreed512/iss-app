import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [IssPosition, setIssPosition] = useState({lat: 0, long: 0})
  const getIssPosition = () => {
    fetch('http://api.open-notify.org/iss-now.json')
      .then(response => response.json())
      .then(data => {
        let lat = data.iss_position.latitude
        let long = data.iss_position.longitude
        setIssPosition({lat, long})
      });
  }
  useEffect(getIssPosition, [])

  return (
    <div className="App">
      lat: {IssPosition.lat}
      long: {IssPosition.long}
    </div>
  );
}

export default App;
