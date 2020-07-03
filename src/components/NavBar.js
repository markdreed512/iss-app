import React from 'react'
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core'
import { makeStyles, withTheme } from '@material-ui/core/styles';
import iss from '../images/iss.png'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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
    button: {
        color: "white"
    }
}))

function NavBar(props) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                    <img src={iss} alt="iss logo" height="30px" className={classes.logo}/>
                    <Typography variant="h6" className={classes.title}>
                        ISS: Where and When
                    </Typography>
                    {/* <Button className={classes.button} onClick={props.handleClick} id="home">Home</Button> */}
                    <Button className={classes.button} onClick={props.handleClick} id="map">Where</Button>
                    <Button className={classes.button} onClick={props.handleClick} id="input">When</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
