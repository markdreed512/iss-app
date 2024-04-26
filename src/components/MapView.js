import React, { useEffect, useState } from 'react'
import { Map, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  mapStyles: {
    marginTop: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px grey"
  },
  title: {
    marginTop: "20px",
    textAlign: "center"
  }
})

function IssMap() {
  const [IssPosition, setIssPosition] = useState({ lat: 0, long: 0 })
  const [ZoomLevel, setZoomLevel] = useState(3)
  const classes = useStyles()

  const getIssPosition = () => {
    fetch('https://api.wheretheiss.at/v1/satellites/25544/')
      .then(response => response.json())
      .then(data => {
        let lat = data.latitude
        let long = data.longitude
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
    iconUrl: require('../images/iss.png'),
    iconSize: new L.Point(30, 30),
    iconAnchor: [15, 15],
    className: 'leaflet-div-icon'
  });
  const handleZoomEnd = (e) => {
    setZoomLevel(e.target._zoom)
  }
  return (
    <>
      <Typography variant="h3" className={classes.title}>
        Where is the International Space Station Now?
      </Typography>
      <Map
        center={[IssPosition.lat, IssPosition.long]}
        zoom={ZoomLevel}
        onzoomend={handleZoomEnd}
        className={classes.mapStyles}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={[IssPosition.lat, IssPosition.long]} icon={issIcon} />
      </Map>
    </>
  )
}

export default IssMap
