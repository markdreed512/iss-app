import React, { useState, useEffect } from 'react'
import Display from './Display'
import { makeStyles, Container, TextField, Button, Typography, Grid } from '@material-ui/core'
import ErrorModal from './ErrorModal'

const useStyles = makeStyles({
    container: {
        maxWidth: "40%",
        marginTop: "30px"
    },
    form: {
        marginTop: "20px",
        width: "100%"
    },
    input: {
        width: "100%"
    },
    button: {
        height: "55px",
        marginLeft: "5px"
    }
})

function PassesView() {
    const [lat, setLat] = useState("")
    const [long, setLong] = useState("")
    const [searchQuery, setSearchQuery] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [country, setCountry] = useState("")
    const [zip, setZip] = useState("")
    const [dates, setDates] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [listIsVisible, setListIsVisible] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)

    const classes = useStyles()


    useEffect(() => {
        const apiKey = "4b2ccb0553c346ef9b0782e991f3eb1d"
        if (searchQuery) {
            const url = `https://api.opencagedata.com/geocode/v1/json?q=${searchQuery}&key=${apiKey}`
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    if (data.results[0]) {
                        setLat(data.results[0].geometry.lat)
                        setLong(data.results[0].geometry.lng)
                        setCity(data.results[0].components.city)
                        setCountry(data.results[0].components.country)
                        setZip(data.results[0].components.postcode)
                        setState(data.results[0].components.state)
                        setListIsVisible(true)
                    } else {
                        setModalOpen(true)
                    }

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
        if (inputValue) {
            setSearchQuery(inputValue)
            setInputValue("")
        }

    }
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleModalClose = (e) => {
        e.preventDefault()
        console.log(e.target)
        setModalOpen(false)
    }

    return (
        <Container className={classes.container}>
                <Typography variant="h2" align="center">
                    When can I see the Space Station?
            </Typography>

                <form onSubmit={handleSubmit} className={classes.form}>
                    <Grid container>
                        <Grid item xs={10}>
                            <TextField
                                label="city or zip code"
                                variant="outlined"
                                className={classes.input}
                                onChange={handleInputChange}
                                value={inputValue}
                            />

                        </Grid>
                        <Grid item xs={2}>
                            <Button
                                type="submit"
                                variant="outlined"
                                color="primary"
                                className={classes.button}
                            >
                                OK
                        </Button>
                        </Grid>

                    </Grid>
                </form>
                {listIsVisible ? <Display
                    dates={dates}
                    lat={lat}
                    long={long}
                    city={city}
                    state={state}
                    zip={zip}
                    country={country}
                /> : <></>}
                <ErrorModal handleClose={handleModalClose} open={modalOpen}/>
        </Container>
    )
}

export default PassesView
