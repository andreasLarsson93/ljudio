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
                <button className="fa fa-share-alt-square" onClick={copyLinkUrL}></button>
            
            </div>
                <button className="the-any-button" value={params.searchTerm} onClick={(e) => playSong(e.target)}>The "any" button</button>
            <Player videoId={value}/>

        </>
    )


}

export default SingleSong