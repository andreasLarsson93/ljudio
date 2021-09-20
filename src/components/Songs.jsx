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
       // getSongsInPlayList(result)
    }

    // Ifall man måste ha länkarna i playlisten
     const getSongsInPlayList= async(result)=>{
        const getSongsInPlayList = "https://yt-music-api.herokuapp.com/api/yt/playlist/" + result;
        const getSongsInPlayListResults = await fetch(getSongsInPlayList)
        const playListResults = await getSongsInPlayListResults.json()
        console.log(playListResults.content)

    } 

    const playMusic = (element) => {
        setValue(element.value)
        getSongsInPlayList()
        
    }


    return <>
        <div>
            <h2>Songs</h2>
            <Player videoId={value} browseId={playListValue} />
            {props.songsArray.map(song => <p key={song.name}>

                {song.name}
                <button value={song.videoId} onClick={(e) => playMusic(e.target)}>play</button>
            </p>)}
            <div>

            <h2>Play Lists</h2>
            {props.playListsArray.slice(0,3).map(playList => <button key={playList.browseId} 
            value={playList.browseId} onClick={(e) => startPlayList(e.target)}>

                {playList.title}

            </button> )}
                </div>
        </div>
    </>


}
export default Songs