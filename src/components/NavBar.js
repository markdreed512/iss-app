import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import iss from '../images/iss.png'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    logo: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    },
    link: {
        color: "white",
        textDecoration: "none",
        paddingRight: "10px"
    }
}))

function NavBar(props) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <img src={iss} alt="iss logo" height="30px" className={classes.logo} />
                    <Typography variant="h6" className={classes.title}>
                        ISS: Where and When
                    </Typography>
                        <Link to="/" className={classes.link}>Where</Link>
                        <Link to="/passes"  className={classes.link}>When</Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
