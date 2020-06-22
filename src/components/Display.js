import React from 'react'
import Moment from 'moment'
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
      maxWidth: "40%"
    },
  });
function Display(props) {
    const classes = useStyles()
    if (props.dates) {
        return (
            <div>
                <h1>{`Passes for ${props.city}. Times in UTC`}</h1>
                <TableContainer>
                <Table className={classes.table}>
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
                            const d = Moment.unix(date.risetime).utc()
                            // .format('dddd, MMMM Do, YYYY h:mm:ss A')
                            return (
                                <TableRow key={i}>
                                    <TableCell>{d.format('ddd')}</TableCell>
                                    <TableCell>{d.format('LT')}</TableCell>
                                    <TableCell>{d.format('ddd')}</TableCell>
                                    <TableCell>{d.format('LT')}</TableCell>
                                    
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
                </TableContainer>
                {/* <h1>{`Pass times: ${if(dates){dates[0].risetime}, ${dates[1].risetime}, ${dates[2].risetime}`}</h1> */}
            </div>
        )
    } else {
        return null
    }

}

export default Display
