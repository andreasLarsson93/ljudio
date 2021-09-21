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

    const playMusic = (element) => {
        setValue(element.value)
        
    }
   
  


    return <>
        <div>
            <h2>Songs</h2>
            <h3>Listen to some samples</h3>
            {props.songsArray.map(song => <p key={song.videoId}>
                <button value={song.videoId} onClick={(e) => playMusic(e.target)}>{song.name}</button>
            </p>)}

            <div>
            <Player videoId={value} browseId={playListValue} />

            <h2>Play Lists</h2>
            <h3>Listen to some play lists</h3>
            {props.playListsArray.slice(0,3).map(playList => <button key={playList.browseId} 
            value={playList.browseId} onClick={(e) => startPlayList(e.target)}>

                {playList.title}

            </button>)}
                </div>
                <div>
                    <h2>Artists</h2>
                    {props.artistsArray.slice(0,3).map(artist => <button key={artist.browseId}>

                {artist.name}

            </button>)}
                </div>
                <div>
                    <h2>Albums</h2>
                    {props.albumsArray.slice(0,3).map(album => <button key={album.browseId}>

                {album.name}

            </button>)}
                </div>
        </div>
    </>


}
export default Songs