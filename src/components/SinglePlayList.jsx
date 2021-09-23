import React, { useState, useEffect } from "react";
import Player from "./Player";



function SinglePlayList(props) {

    let match = props.match

    let params = match.params

    const [singlePlayListSongs, updateSinglePlayListSongs] = useState([])
    const [value, setValue] = useState('')
    const [fullPlayList, setFullPlayList] = useState('')
    let tempList = []

    const getSongsForSinglePlayList = async () => {

        const singlePlayListApiSearch = "https://yt-music-api.herokuapp.com/api/yt/playlist/" + params.searchTerm
        const singlePlayListResp = await fetch(singlePlayListApiSearch)
        const singlePlayListResults = await singlePlayListResp.json()

        console.log(singlePlayListResults)
        for (let item of singlePlayListResults.content) {
            tempList.push(item)
        }


        updateSinglePlayListSongs(tempList)


    }
    useEffect(() => {
        getSongsForSinglePlayList()

    }, [])
    const playThisSongInList = (element) => {

        setValue(element.value)

    }
    const playFullPlayList = (element) => {

        setFullPlayList(element.value)

    }
    const changeClass=(target)=>{
        target.className="isPlaying"
    }
    const removeNewClass=()=>{
        if(document.querySelector(".isPlaying")){

            document.querySelector(".isPlaying").className='play-playlist'
        }
    }
    function copyLinkUrL() {
        navigator.clipboard.writeText(window.location.href)
    }
    
    return (<>
        <div>
            <div className="title-copy">
                <h1>Single playlist</h1> <button className="fa fa-share-alt-square" onClick={copyLinkUrL}></button>
                <button className="play-playlist" value={params.searchTerm} onClick={(e) => {playFullPlayList(e.target);changeClass(e.target)}} >Play full playList</button>
            </div>
            <Player videoId={value} browseId={fullPlayList} />

            <div className="all-container">

                {singlePlayListSongs.map((playListSong, index) =>
                    <button className="play-song-button" value={playListSong.videoId} onClick={(e) => {playThisSongInList(e.target);removeNewClass(e.target)}} key={index}>
                        {playListSong.name}
                    </button>

                )}
            </div>

        </div>
    </>
    )

}

export default SinglePlayList