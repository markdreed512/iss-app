import React from 'react'
import Moment from 'moment'
import { Container, Table, TableHead, TableBody, TableRow, TableCell,  Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    table: {
      width: "100%"
    },
    paper: {
        maxWidth: "100%"
    }
  });

function Display(props) {
    const classes = useStyles()
    const displayLocation = () => {
        let country
        if(props.country === "United States of America"){
            country = "USA"
        }else{
            country = props.country
        }
        if(props.city){
            return props.state? `${props.city}, ${props.state}, ${country}` : `${props.city}, ${country}`
        }else if (props.zip){
            return props.state? `${props.zip}, ${props.state}, ${country}` : `${props.zip}`
        }else {
            return "handle error here"
        }
    }
    if (props.dates) {
        return (
            <div>
                
                <Container component={Paper} className={classes.paper} elevation={3}>
                <h1>Passes for {displayLocation()}</h1>
                <Table className={classes.table} size="small">
                    <TableHead>
                        <TableRow>
                                <TableCell>Day</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Time</TableCell>
                                <TableCell>Duration</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.dates.map((date, i) => {
                            const d = Moment.unix(date.risetime)
                            // if time in range, return row, else, return nothing
                            if(d.format('HH') > 20 || d.format('HH') < 6){
                                return (
                                    <TableRow key={i}>
                                        <TableCell>{d.format('ddd')}</TableCell>
                                        <TableCell>{d.format('MM-DD-YY')}</TableCell>
                                        <TableCell>{d.format('LT')}</TableCell>
                                        <TableCell>{`${Math.floor(date.duration / 60)} min, ${date.duration % 60 } sec.`}</TableCell>
                                        
                                    </TableRow>
                                )
                            }
                            else return null
                            
                        })}
                    </TableBody>
                </Table>
                </Container>
                {/* <h1>{`Pass times: ${if(dates){dates[0].risetime}, ${dates[1].risetime}, ${dates[2].risetime}`}</h1> */}
            </div>
        )
    } else {
        return null
    }

}

export default Display
