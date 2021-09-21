import React, {useState,useEffect} from "react";
import { useHistory } from "react-router-dom";





function PlayLists(props) {
    
    let match = props.match
    let params = match.params
   
    
    const history = useHistory();
    
    const [playListsArray,updatePlayListArray] = useState([])
    let tempList = []
    
    const getAllPlayLists = async()=>{
        
        try{
            
            const playListApiSearch = "https://yt-music-api.herokuapp.com/api/yt/playlists/" + params.searchTerm;
            const playListResp = await fetch(playListApiSearch)
            const playListResults = await playListResp.json()

            for(let item of playListResults.content){
                tempList.push(item)
            }
            
        }
        catch(e){
            console.error(e)
        }
        console.log(tempList)
        updatePlayListArray(tempList)
        
        
    }
    useEffect( () => {
        getAllPlayLists()
    },[])
    function goToChosePlayList(element) {
       let searchTerm = element.value.slice(2)
        history.push({
            pathname: '/playlist/' + searchTerm,
            state: {
                searchTerm: searchTerm,
            }

        })
        
    }
    

    return (
    
        <div>

            <ul > 
            {playListsArray.map((playList, index)=>
            <button value={playList.browseId} onClick={(e) => goToChosePlayList(e.target)} key={index}>
                        {playList.title}
            </button>
            )}
            </ul> 
        </div>
        
    )


}


export default PlayLists