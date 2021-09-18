import React, { useState, useEffect } from "react";
import Player from "./Player";
import YouTube from "react-youtube";
import { render } from "react-dom"





function Songs(props) {

    const [value, setValue] = useState('')

    useEffect(()=>{
        
        
    },[value])
    
    
    let playListArray = []
    for (let item of props.songsArray) {
        
        playListArray.push(item.videoId)
    }
    
    let playListCounter = 0;
    function nextSong (){
        
            setValue(playListArray[playListCounter])
           
            console.log(value)

            if (playListArray.length > playListCounter) {

                playListCounter++
            }

            if (playListCounter > playListArray.length) {
                playListCounter = 0
            }

        }

    const playMusic = (element) => {
        setValue(element.value)
        console.log(element.value)
    }


    return <>
        <div>

            <h2>Songs</h2>
            <Player videoId={value} />
            {props.songsArray.map(song => <p key={song.name}>

                {song.name}
                <button value={song.videoId} onClick={(e) => playMusic(e.target)}>play</button>
            </p>)}
            <button onClick={()=>nextSong()}>next</button>

        </div>

    </>


}
export default Songs