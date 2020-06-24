import React from 'react'
import Moment from 'moment'
import { Container, Table, TableHead, TableBody, TableRow, TableCell,  Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    table: {
      width: "100%"
    },
    paper: {
        maxWidth: "40%"
    }
  });
function Display(props) {
    const classes = useStyles()
    if (props.dates) {
        return (
            <div>
                <h1>{`ISS Passes for ${props.city}:`}</h1>
                <Container component={Paper} className={classes.paper} elevation={3}>
                <Table className={classes.table} size="small" aria-label="a dense table">
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
