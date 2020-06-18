import React from 'react'

function Display(props) {
    if(props.dates){
        return (
            <div>
                <h1>{`${props.lat} ${props.long} ${props.city}`}</h1>
                {props.dates.map(date=>{
                    return <li>{date.risetime}</li>
                })}
                {/* <h1>{`Pass times: ${if(dates){dates[0].risetime}, ${dates[1].risetime}, ${dates[2].risetime}`}</h1> */}
            </div>
        )
    } else {
        return null
    }
    
}

export default Display
