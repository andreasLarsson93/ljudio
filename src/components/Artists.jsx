import React, { useState, useEffect } from "react";




function Artists(props) {

    
    let match = props.match
    console.log(match.params)
    let params = match.params
    console.log(match.params.searchTerm) 


    const [allArtistsList, updateAllArtistsList] = useState([])
    
    let tempList =[]
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
    },[])

    return (<>
        <h1>All artists</h1>
        <div>

                {allArtistsList.map((artists, index)=><ul> 
                            <li key={index}>
                                <p>{artists.name}</p> 
                            
                                </li>
                            </ul> )}

                        </div>
    </>
               
)}


export default Artists