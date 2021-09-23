import React, { useState } from "react";
import Songs from "./Songs";

import { useHistory } from "react-router-dom";


function Search() {

    const [searchInput, updateSearchInput] = useState('')
    const [songsArray, updateSongsArray] = useState([])
    const [artistsArray, updateArtistArray] = useState([])
    const [albumsArray, updateAlbumsArray] = useState([])
    const [playListsArray, updatePlayListsArray] = useState([])
    const [showResults, setShowResults] = useState(false)
    
    const history = useHistory();

    const searchMusic = async () => {
        //All search
        const apiSearch = "https://yt-music-api.herokuapp.com/api/yt/search/" + searchInput;
        const resp = await fetch(apiSearch)
        const results = await resp.json()
        //PlayList Search
        const playListApiSearch = "https://yt-music-api.herokuapp.com/api/yt/playlists/" + searchInput;
        const playListResp = await fetch(playListApiSearch)
        const playListResults = await playListResp.json()

        let songsArray = []
        let artistsArray = []
        let albumsArray = []
        let playListsArray = []

        for (let playList of playListResults.content) {
            playListsArray.push(playList)

        }

        for (let item of results.content) {
            if (item.type == 'song') {

                songsArray.push(item)
            }
            if (item.type == 'artist') {
                artistsArray.push(item)
            }
            if (item.type == 'album') {
                albumsArray.push(item)
            }

        }
        updateSongsArray(songsArray)
        updateArtistArray(artistsArray)
        updateAlbumsArray(albumsArray)
        updatePlayListsArray(playListsArray)


        setShowResults(true)

    }
    function goToArtistsComponent() {

        history.push({
            pathname: '/artists/' + searchInput,
            state: {
                searchTerm: searchInput,
            }
        })
        
    }
    function goToAllSongsComponent() {

        history.push({
            pathname: '/songs/' + searchInput,
            state: {
                searchTerm: searchInput,
            }

        })
    }
    function goToPlayListsComponent() {

        history.push({
            pathname: '/playlists/' + searchInput,
            state: {
                searchTerm: searchInput,
            }

        })
    }
    function copyLinkUrL(){
        navigator.clipboard.writeText(window.location.href)
    }
    

    return (<>
        <div className="search-container">
        
            <div className="form-container">
                <form onSubmit={event => event.preventDefault()}>
                    <input placeholder="search" onChange={event => updateSearchInput(event.target.value)} />
                    <button type="submit" onClick={searchMusic}>search</button>
                    <button className="fa fa-share-alt-square" onClick={copyLinkUrL}></button>
                </form>
            </div>
            <div style={{ display: showResults ? 'flex' : 'none' }}>

                    <Songs songsArray={songsArray} playListsArray={playListsArray} albumsArray={albumsArray} artistsArray={artistsArray}/>
            </div>
        </div>
            <div className="direction-buttons-container" style={{ display: showResults ? 'flex' : 'none' }}>
                    <button className="go-to-buttons" onClick={goToAllSongsComponent}>Go to AllSongs </button>
                    <button className="go-to-buttons" onClick={goToPlayListsComponent} >Go to Playlists</button>
                    <button className="go-to-buttons" onClick={goToArtistsComponent} >Go to Artists</button>
             
            </div>
        </>
    )

}

export default Search