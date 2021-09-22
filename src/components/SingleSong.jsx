import React, { useState } from "react";
import Player from "./Player";



function SingleSong(props) {
    const [value, updateValue] = useState('')

    let match = props.match
    let params = match.params
   

   


    const playSong = (element) => {
        updateValue(element.value)

    }
    
    function copyLinkUrL() {
        navigator.clipboard.writeText(window.location.href)
    }

    return (
        <>
            <div className="title-copy">
                <h1>PRESS THE ANY BUTTON</h1>
            <div>
                <button className="play-song-button" value={params.searchTerm} onClick={(e) => playSong(e.target)}>The "any" button</button>
            </div>
                <button className="play-song-button" className="copy-button" onClick={copyLinkUrL}>copy</button>
            </div>
            <Player videoId={value}/>

        </>
    )


}

export default SingleSong