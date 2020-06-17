import React, { useState, useEffect } from 'react';
import './App.css';
import  { Map, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet'
function App() {
  const [IssPosition, setIssPosition] = useState({ lat: 0, long: 0 })
  const [ ZoomLevel, setZoomLevel] = useState(5)
  const getIssPosition = () => {
    fetch('http://api.open-notify.org/iss-now.json')
      .then(response => response.json())
      .then(data => {
        let lat = data.iss_position.latitude
        let long = data.iss_position.longitude
        setIssPosition({ lat, long })
      });
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      getIssPosition()
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  const issIcon = new L.Icon({
      iconUrl: require('./images/iss.png'),
      iconSize: new L.Point(30, 30),
      iconAnchor: [20,20],
      className: 'leaflet-div-icon'
  });

  return (
    <div className="App">
      
      <Map center={[IssPosition.lat, IssPosition.long]}  zoom={ZoomLevel}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={[IssPosition.lat, IssPosition.long]} icon={issIcon} />
      </Map>
      
    </div>
  );
}

export default App;
