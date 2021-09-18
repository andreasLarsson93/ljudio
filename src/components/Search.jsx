import React, { useState } from "react";
import Songs from "./Songs";
import Artist from "./Artists";
import Albums from "./Albums";
import Player from "./Player";


function Search() {

    const [searchInput, updateSearchInput] = useState('')
    const [songsArray, updateSongsArray] = useState([])
    const [artistsArray, updateArtistArray] = useState([])
    const [albumsArray, updateAlbumsArray] = useState([])
  




    const searchMusic = async () => {

        const apiSearch = "https://yt-music-api.herokuapp.com/api/yt/search/" + searchInput;
        const resp = await fetch(apiSearch)
        const results = await resp.json()
        let songsArray = []
        let artistsArray = []
        let albumsArray = []
        
        
        

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
        
    
    }
    

    return (
        <div>

            <div className="search-container">
                <form onSubmit = {event=>event.preventDefault()}>
                    <input placeholder="search" onChange={event => updateSearchInput(event.target.value)} />
                    <button type="submit" onClick={searchMusic}>search</button>
                </form>

            </div>
            <div className="all-container">
                <div>
                    <Songs songsArray={songsArray} />
                </div>
                <div>
                    <Artist artistsArray={artistsArray} />
                </div>
                <div>
                    <Albums albumsArray={albumsArray} />
                </div>
               
                
                
            </div>
        </div>

    )



}

export default Search