import React, { useState, useEffect } from 'react'
import Display from './Display'
function Input() {
    const [lat, setLat] = useState("")
    const [long, setLong] = useState("")
    const [searchQuery, setSearchQuery] = useState("")
    const [city, setCity] = useState("")
    const [dates, setDates] = useState([])

    useEffect(() => {
        if (searchQuery) {
            const url = `https://api.opencagedata.com/geocode/v1/json?q=${searchQuery}&key=4b2ccb0553c346ef9b0782e991f3eb1d`
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setLat(data.results[0].geometry.lat)
                    setLong(data.results[0].geometry.lng)
                    setCity(data.results[0].components.city)
                })
        }

    }, [searchQuery])
    useEffect(() => {
        if (lat && long) {
            //get iss pass times when lat or long update
            const url = `https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${long}&n=5`
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data.response)
                    setDates(data.response)
                })
        }

    }, [lat, long])

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchQuery(e.target.children[0].value)
    }


    return (
        <>
            <Display
                dates={dates}
                lat={lat}
                long={long}
                city={city}
            />
            <form onSubmit={handleSubmit}>
                <input placeholder="city or zip code" />
                <button>OK</button>
            </form>
        </>
    )
}

export default Input
