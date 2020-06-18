import React from 'react'

function Display(props) {
    if(props.dates){
        return (
            <div>
                <h1>{`${props.lat} ${props.long} ${props.city}`}</h1>
                
                {props.dates.map((date, i)=>{
                    const d = new Date(date.risetime * 1000)
                    console.log(d.toString())
                    return <li key={i}>{d.toString()}</li>
                })}
                {/* <h1>{`Pass times: ${if(dates){dates[0].risetime}, ${dates[1].risetime}, ${dates[2].risetime}`}</h1> */}
            </div>
        )
    } else {
        return null
    }
    
}

export default Display
