import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";




function Artists(props) {


    let match = props.match
    
    let params = match.params
   
    const history = useHistory();


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
    const goToThisArtist = (element) => {
        let searchTerm = element.value
        
        history.push({
            pathname: '/artist/' + searchTerm,
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

            <h1>All artists</h1> <button className="copy-button" onClick={copyLinkUrL}>copy</button>
        </div>

             <div className="all-container">

            {allArtistsList.map((artists, index) => <button value={artists.browseId} key={index} onClick={(e) => goToThisArtist(e.target)}>
                {artists.name}
            </button>)}

            <div>
            </div>
        </div>
    </>

    )
}


export default Artists