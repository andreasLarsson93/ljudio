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
    function copyLinkUrL() {
        navigator.clipboard.writeText(window.location.href)
    }




    return (<>
        <div>
            <div className="title-copy">

                <h1>Single playlist</h1> <button className="copy-button" onClick={copyLinkUrL}>copy</button>
            </div>
            <Player videoId={value} browseId={fullPlayList} />
            {singlePlayListSongs.map((playListSong, index) =>
                <button value={playListSong.videoId} onClick={(e) => playThisSongInList(e.target)} key={index}>
                    {playListSong.name}
                </button>

            )}
            <button value={params.searchTerm} onClick={(e) => playFullPlayList(e.target)} >play full playList</button>

        </div>
    </>
    )

}

export default SinglePlayList