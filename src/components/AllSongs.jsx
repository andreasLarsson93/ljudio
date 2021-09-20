import React, { useState, useEffect } from "react";




function AllSongs(props) {


    let match = props.match
    let params = match.params


    const [allSongsList, updateAllSongsList] = useState([])


    const getAllSongsList = async () => {

        try {

            const allSongsApiSearch = "https://yt-music-api.herokuapp.com/api/yt/songs/" + params.searchTerm;
            const allSongsListResp = await fetch(allSongsApiSearch)
            const allSongsListResults = await allSongsListResp.json()

            for (let item of allSongsListResults.content) {
                allSongsList.push(item)

            }

        }
        catch (e) {
            console.error(e)
        }
        updateAllSongsList(allSongsList)
        console.log(allSongsList)

    }
    useEffect(() => {
        getAllSongsList()
    })

    return (<>
        <h1>All songs</h1>
        <div>

            <ul>
                {allSongsList.map((allsongs, index) =>
                    <li key={index}>
                        <p>{allsongs.name}</p>

                    </li>
                    )}
            </ul>

        </div>
    </>

    )
}


export default AllSongs