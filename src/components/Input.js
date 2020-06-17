import React, { useState, useEffect } from 'react'

function Input() {
    const [lat, setLat] = useState(0)
    const [long, setLong] = useState(0)
    const [searchQuery, setSearchQuery] = useState("honolulu")
    const [city, setCity] = useState("none")
    const [time1, setTime1] = useState("0:00")
    const [time2, setTime2] = useState("0:00")

    useEffect(() => {
        //get lat and long when search submitted
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${searchQuery}&key=4b2ccb0553c346ef9b0782e991f3eb1d`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setLat(data.results[0].geometry.lat)
                setLong(data.results[0].geometry.lng)
                setCity(data.results[0].components.city)
            })
    }, [searchQuery])
    useEffect(()=>{
        //get iss pass times when lat or long update
        const url =`https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-pass.json?lat=50&lon=50`
        fetch(url)
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data.response[0].risetime)
                setTime1(data.response[0].risetime)
                setTime2(data.response[1].risetime)

            })
    },[lat, long])

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchQuery(e.target.children[0].value)
    }


    return (
        <>
            <h1>{`${lat} ${long} ${city}`}</h1>
            <h1>{`Pass times: ${time1}, ${time2}`}</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="city or zip code" />
                <button>OK</button>
            </form>
        </>
    )
}

export default Input
