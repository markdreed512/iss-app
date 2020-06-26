import React from 'react'
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import iss from '../images/iss.png'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        // backgroundImage: `url(${iss})`,
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}))

function NavBar(props) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    {/* <img src={iss} alt="iss logo" height="30px"/> */}
                    <Typography variant="h6" className={classes.title}>
                        ISS App
                    </Typography>
                    <Button className={classes.button} onClick={props.handleClick} id="home">Home</Button>
                    <Button className={classes.button} onClick={props.handleClick} id="map">Map</Button>
                    <Button className={classes.button} onClick={props.handleClick} id="input">When</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
