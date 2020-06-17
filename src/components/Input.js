import React from 'react'

const async getData = () => {
    console.log("test")
    const url = "https://api.opencagedata.com/geocode/v1/json?q=Austin&key=4b2ccb0553c346ef9b0782e991f3eb1d"
    const await geoData = fetch(url)
                    .then(response=>response.json())
                    .then(data=>{
                        return data
                    })
    console.log(geoData)
}

function Input() {
    return (
        <form onSubmit={getData}>
            <input />
        </form>
    )
}

export default Input
