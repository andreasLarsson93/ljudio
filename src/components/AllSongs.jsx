import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";




function AllSongs(props) {


    let match = props.match
    let params = match.params
    const history = useHistory();

    const [allSongsList, updateAllSongsList] = useState([])
   
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
    }, [])
    const goToThisSong = (element) => {
        let searchTerm = element.value
        history.push({
            pathname: '/song/' + searchTerm,
            state: {
                searchTerm: searchTerm,
            }

        })
    }

    function copyLinkUrL() {
        navigator.clipboard.writeText(window.location.href)
    }



    return (<>

        <div className="title-copy">

            <h1>All songs</h1> <button className="fa fa-share-alt-square" onClick={copyLinkUrL}></button>
        </div>
 
            <div className="all-container">

            {allSongsList.map((song, index) =>
                <button value={song.videoId}  onClick={(e) => goToThisSong(e.target)} key={index}>
                    {song.name}
                </button>
            )}
            <div>
            </div>
        </div>
    </>

    )
}


export default AllSongs