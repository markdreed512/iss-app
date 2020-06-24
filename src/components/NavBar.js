import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button, } from '@material-ui/core'
import { Menu } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    menuButton: {

    }
})

function NavBar(props) {
    const classes = useStyles()
    return (
        <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <Menu />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      News
    </Typography>
    <Button color="inherit" onClick={props.handleClick} id="home">Home</Button>
    <Button color="inherit" onClick={props.handleClick} id="map">Map</Button>
    <Button color="inherit" onClick={props.handleClick} id="input">When</Button>
  </Toolbar>
</AppBar>
    )
}

export default NavBar
