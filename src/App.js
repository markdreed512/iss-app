import React, { useState, useEffect } from 'react';
import './App.css';
import { Map, TileLayer } from 'react-leaflet'
function App() {
  const [IssPosition, setIssPosition] = useState({ lat: 0, long: 0 })
  const getIssPosition = () => {
    fetch('http://api.open-notify.org/iss-now.json')
      .then(response => response.json())
      .then(data => {
        let lat = data.iss_position.latitude
        let long = data.iss_position.longitude
        setIssPosition({ lat, long })
      });
  }
  useEffect(getIssPosition, [])

  return (
    <div className="App">
      <Map center={[IssPosition.lat, IssPosition.long]}  zoom={1}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
      </Map>
    </div>
  );
}

export default App;
