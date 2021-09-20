import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Search from './components/Search';
import Songs from './components/Songs';




function App() {


  return(
    <Router>
      <div>
        <nav>
         
          <Link to ="/search"> Find fun music!</Link>
        </nav>
        <Switch>
            <Route exact path="/search">
            <Search/>
          </Route>
          <Route exact path="/songs/:searchTerm" component={Songs}></Route>
         
        </Switch>
      </div>
    </Router>
    
  )
}

export default App
