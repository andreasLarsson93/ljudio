import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './components/HomePage';

import Search from './components/Search';




function App() {


  return(
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
        
        </nav>

        <Switch>
          <Route exact path="/">
            
            <h1>Ljudio home page</h1>
            <Search/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  )
}

export default App
