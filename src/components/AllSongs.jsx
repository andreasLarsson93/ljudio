import React, { useState, useEffect } from "react";
import Player from "./Player";




function AllSongs(props) {


    let match = props.match
    let params = match.params


    const [allSongsList, updateAllSongsList] = useState([])
    const [singleSong,updateSingleSong] = useState('')

    let tempList = []
    const getAllSongsList = async () => {

        try {

            const allSongsApiSearch = "https://yt-music-api.herokuapp.com/api/yt/songs/" + params.searchTerm;
            const allSongsListResp = await fetch(allSongsApiSearch)
            const allSongsListResults = await allSongsListResp.json()

            for (let item of allSongsListResults.content) {
                tempList.push(item)

            }

        }
        catch (e) {
            console.error(e)
        }
        updateAllSongsList(tempList)
        
    }
    useEffect(() => {
        getAllSongsList()
    },[])
    const playThisSong = (element) =>{
        updateSingleSong(element.value)
    }

    return (<>
        <Player videoId={singleSong} />
        <h1>All songs</h1>
        <div>

        {allSongsList.map((song, index)=>
            <button value={song.videoId} onClick={(e) => playThisSong(e.target)} key={index}>
                        {song.name}
            </button>
            
            )}

        </div>
    </>

    )
}


export default AllSongs