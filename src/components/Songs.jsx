import React, { useState, useEffect } from "react";
import Player from "./Player";
import YouTube from "react-youtube";
import { render } from "react-dom"





function Songs(props) {

    const [value, setValue] = useState('')
    const [playListValue, setPlayListValue] = useState('')



    const startPlayList = (element) => {

        let result =element.value.slice(2)
        
        setPlayListValue(result)
       
    }
    const changeClass=(target)=>{
        if(document.querySelector(".isPlaying")){

            document.querySelector(".isPlaying").className='play-playlist'
        }
        target.className="isPlaying"
    }

    const playMusic = (element) => {
        if(document.querySelector(".isPlaying")){

            document.querySelector(".isPlaying").className='play-playlist'
        }
        setValue(element.value)
        
    }

    return <>
        <div className="first-page-container">

            <h2>Songs</h2>
            <h3>Listen to some samples</h3>
            <div className="buttons-container">
            {props.songsArray.map(song => <button key={song.videoId}
                 className="play-song-button" value={song.videoId} onClick={(e) => playMusic(e.target)}>{song.name}
                 </button>)}

            </div>

            <h2>Play Lists</h2>
            <h3>Listen to some play lists</h3>
            <div className="buttons-container">
            {props.playListsArray.slice(0,3).map(playList => <button className="play-playlist" key={playList.browseId} 
            value={playList.browseId} onClick={(e) => {startPlayList(e.target);changeClass(e.target)}}>

                {playList.title}

            </button>)}
                </div>
                    <h2>Artists</h2>
                <div className="buttons-container">
                    {props.artistsArray.slice(0,3).map(artist => <button key={artist.browseId}>

                {artist.name}

            </button>)}
                </div>
                    <h2>Albums</h2>
                <div className="buttons-container">
                    {props.albumsArray.slice(0,3).map(album => <button key={album.browseId}>

                {album.name}

            </button>)}
                </div>

        <div>

        <footer>
                        
            <Player videoId={value} browseId={playListValue} />
        </footer>
        </div>
      
        </div>
    </>


}
export default Songs