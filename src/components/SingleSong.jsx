import React, { useState, useEffect } from "react";
import Player from "./Player";



function SingleSong(props) {
    const [value, updateValue] = useState('')

    let match = props.match
    let params = match.params

    console.log(params.searchTerm)


    const playSong = (element) => {
        updateValue(element.value)

    }
    
    function copyLinkUrL() {
        navigator.clipboard.writeText(window.location.href)
    }

    return (
        <>
            <div className="title-copy">
                <h1>Your song</h1> <button className="copy-button" onClick={copyLinkUrL}>copy</button>
            </div>
            <Player videoId={value} />
            <div>

                <button value={params.searchTerm} onClick={(e) => playSong(e.target)}>The "any" button</button>
            </div>

        </>
    )


}

export default SingleSong