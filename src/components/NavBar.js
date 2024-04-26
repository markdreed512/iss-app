import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import iss from '../images/iss.png'

const Nav = styled.nav`
    background: salmon;
    color: black;
    display: flex;
    padding: 20px;
    justify-content: space-between;
    box-shadow: 0 1px 10px black;
`
const Li = styled.li`
    display: inline;
    margin-right: 20px;
`
const Ul = styled.ul`
    margin: 0;
    padding: 0;
`
function NavBar(){
    return (
        <Nav>
            <div>ISS:Where and When</div>
            <Ul>
                <Li><Link to="/">Where </Link></Li>
                <Li><Link to="/passes">When </Link></Li>
            </Ul>
        </Nav>
    )
}


// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1
//     },
//     logo: {
//         marginRight: theme.spacing(2)
//     },
//     title: {
//         flexGrow: 1
//     },
//     link: {
//         color: "white",
//         textDecoration: "none",
//         paddingRight: "10px"
//     }
// }))

// function NavBar(props) {
//     const classes = useStyles()
//     return (
//         <div className={classes.root}>
//             <AppBar position="static">
//                 <Toolbar>
//                     <img src={iss} alt="iss logo" height="30px" className={classes.logo} />
//                     <Typography variant="h6" className={classes.title}>
//                         ISS: Where and When
//                     </Typography>
//                         <Link to="/" className={classes.link}>Where</Link>
//                         <Link to="/passes"  className={classes.link}>When</Link>
//                 </Toolbar>
//             </AppBar>
//         </div>
//     )
// }

export default NavBar
