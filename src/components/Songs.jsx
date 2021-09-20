import React, { useState, useEffect } from "react";
import Player from "./Player";
import YouTube from "react-youtube";
import { render } from "react-dom"





function Songs(props) {

    const [value, setValue] = useState('')
    const [playListValue, setPlayListValue] = useState('')



    const startPlayList = (element) => {

        
        setPlayListValue(element.value.slice(2))

    }

    const playMusic = (element) => {
        setValue(element.value)

    }


    return <>
        <div>

            <h2>Songs</h2>
            <Player videoId={value} browseId={playListValue} />
            {props.songsArray.map(song => <p key={song.name}>

                {song.name}
                <button value={song.videoId} onClick={(e) => playMusic(e.target)}>play</button>
            </p>)}

            <h2>Play Lists</h2>
            {props.playListsArray.map(playList => <button key={playList.browseId} 
            value={playList.browseId} onClick={(e) => startPlayList(e.target)}>

                {playList.title}

            </button>)}

        </div>

    </>


}
export default Songs