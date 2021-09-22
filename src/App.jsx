import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllSongs from './components/AllSongs';
import Artists from './components/Artists';
import Player from './components/Player';
import PlayLists from './components/PlayLists';
import Search from './components/Search';
import SingleArtist from './components/SingleArtist';
import SinglePlayList from './components/SinglePlayList';
import SingleSong from './components/SingleSong';





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
          <Route exact path="/songs/:searchTerm" component={AllSongs}></Route>
          <Route exact path="/playlists/:searchTerm" component={PlayLists}></Route>
          <Route exact path="/playlist/:searchTerm" component={SinglePlayList}></Route>
          <Route exact path="/song/:searchTerm" component={SingleSong}></Route>
          <Route exact path="/artists/:searchTerm" component={Artists}></Route>
          <Route exact path="/artist/:searchTerm" component={SingleArtist}></Route>
         
        </Switch>
      </div>
    </Router>
    
  )
}

export default App
