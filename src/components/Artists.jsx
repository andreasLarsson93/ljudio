import React, { useState, useEffect } from "react";




function Artists(props) {


    let match = props.match
    console.log(match.params)
    let params = match.params
    console.log(match.params.searchTerm)


    const [allArtistsList, updateAllArtistsList] = useState([])

    let tempList = []
    const getAllArtists = async () => {

        try {

            const allArtistsApiSearch = "https://yt-music-api.herokuapp.com/api/yt/artists/" + params.searchTerm
            const allArtistsResp = await fetch(allArtistsApiSearch)
            const allArtistsResult = await allArtistsResp.json()

            for (let item of allArtistsResult.content) {
                tempList.push(item)

            }

        }
        catch (e) {
            console.error(e)
        }
        updateAllArtistsList(tempList)


    }
    useEffect(() => {
        getAllArtists()
    }, [])

    function copyLinkUrL() {
        navigator.clipboard.writeText(window.location.href)
    }



    return (<>
        <div className="title-copy">

            <h1>All artists</h1> <button className="copy-button" onClick={copyLinkUrL}>copy</button>
        </div>
        <div>

            {allArtistsList.map((artists, index) => <button key={index}>
                {artists.name}
            </button>)}

            <div>
            </div>
        </div>
    </>

    )
}


export default Artists