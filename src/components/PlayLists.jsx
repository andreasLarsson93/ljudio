import React, {useState,useEffect} from "react";





function PlayLists(props) {
    
    
    let match = props.match
    let params = match.params
    console.log(params)

    
    const [playListsArray,updatePlayListArray] = useState([])
    
    
    const getAllPlayLists = async()=>{
        
        try{
            
            const playListApiSearch = "https://yt-music-api.herokuapp.com/api/yt/playlists/" + params.searchTerm;
            const playListResp = await fetch(playListApiSearch)
            const playListResults = await playListResp.json()
            
            for(let item of playListResults.content){
                playListsArray.push(item)
                
            }
            
        }
        catch(e){
            console.error(e)
        }
        updatePlayListArray(playListsArray)
        console.log(playListsArray)
        
    }
    useEffect( () => {
        getAllPlayLists()
    },[])
    

    return (
    
        <div>

            <ul > 
            {playListsArray.map((playList, index)=>
            <li key={index}> {playList.title} </li>
            )}
            </ul> 
        </div>
        
    )


}


export default PlayLists