import React, { useState, useEffect } from 'react'

function Input() {
    const [lat, setLat] = useState(0)
    const [long, setLong] = useState(0)
    const [searchQuery, setSearchQuery] = useState("honolulu")
    const [city, setCity] = useState("none")
    useEffect(() => {
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${searchQuery}&key=4b2ccb0553c346ef9b0782e991f3eb1d`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setLat(data.results[0].geometry.lat)
                setLong(data.results[0].geometry.lng)
                setCity(data.results[0].components.city)
            })
    }, [searchQuery])

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchQuery(e.target.children[0].value)
    }


    return (
        <>
            <h1>{`${lat} ${long} ${city}`}</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="city or zip code" />
                <button>OK</button>
            </form>
        </>
    )
}

export default Input
