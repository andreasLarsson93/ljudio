import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllSongs from './components/AllSongs';
import Artists from './components/Artists';
import PlayLists from './components/PlayLists';
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
          <Route exact path="/songs/:searchTerm" component={AllSongs}>
          </Route>
          <Route exact path="/playlists/:searchTerm" component={PlayLists}></Route>
          <Route exact path="/artists/:searchTerm" component={Artists}></Route>
         
        </Switch>
      </div>
    </Router>
    
  )
}

export default App
