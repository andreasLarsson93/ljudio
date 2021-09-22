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
    function copyLinkUrL(){
        navigator.clipboard.writeText(window.location.href)
    }
    
  
    

    return (
    
        <div>
            <div className="title-copy">

            <h1>All playlists</h1> <button className="copy-button" onClick={copyLinkUrL}>copy</button>
            </div>
            
            <div className="all-container">
            {playListsArray.map((playList, index)=>
            <button value={playList.browseId} onClick={(e) => goToChosePlayList(e.target)} key={index}>
                        {playList.title}
            </button>
            )}
            </div>
          
        </div>
        
    )


}


export default PlayLists