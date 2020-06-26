import React, { useState, useEffect } from 'react'
import Display from './Display'
import { makeStyles, Container } from '@material-ui/core'

const useStyles = makeStyles({
    container: {
        maxWidth: "40%"
    },
    input: {
        marginTop: "20px"
    }
})

function Input() {
    const [lat, setLat] = useState("")
    const [long, setLong] = useState("")
    const [searchQuery, setSearchQuery] = useState("")
    const [city, setCity] = useState("")
    const [dates, setDates] = useState([])
    const classes = useStyles()

    useEffect(() => {
        const apiKey = "4b2ccb0553c346ef9b0782e991f3eb1d"
        if (searchQuery) {
            const url = `https://api.opencagedata.com/geocode/v1/json?q=${searchQuery}&key=${apiKey}`
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
            const url = `https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${long}&n=40`
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setDates(data.response)
                })
        }
    }, [lat, long])

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchQuery(e.target.children[0].value)
    }


    return (
        <Container className={classes.container}>
            <form onSubmit={handleSubmit} className={classes.input}>
                <input placeholder="city or zip code" />
                <button>OK</button>
            </form>
            <Display
                dates={dates}
                lat={lat}

                long={long}
                city={city}
            />
        </Container>
    )
}

export default Input
