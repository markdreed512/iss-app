import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import MapView from './components/MapView'
import PassesView from './components/PassesView'
import NavBar from './components/NavBar'

function App() {
  // const [page, setPage] = useState("map")

  // const handleNavClick = (e) => {
  //   console.log(e.currentTarget)
  //   setPage(e.currentTarget.id)
  // }

  return (
    <Router>
      
      <NavBar />
      <Switch>
        <Route path="/passes">
          <PassesView />
        </Route>
        <Route exact path="/">
          <MapView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
