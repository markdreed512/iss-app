import React, { useState } from 'react'

function ApiTest() {
    const [lat, setLat] = useState(0)
    const getData = () => {
        console.log("test")
        const url = "https://api.opencagedata.com/geocode/v1/json?q=Austin+Texas&key=4b2ccb0553c346ef9b0782e991f3eb1d"
        fetch(url)
            .then(response=>response.json())
            .then(data=>{
                console.log( data.results[0].geometry.lat || "hi")
                setLat(data.results[0].geometry.lat)
            })

    }
    return (
        <div>
            <button onClick={getData}>hi</button>
            <h1>{lat}</h1>
        </div>
    )
}

export default ApiTest
