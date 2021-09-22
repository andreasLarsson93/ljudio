import React, {useState, useEffect } from "react";


function SingleArtist(props){

    let match = props.match
    let params = match.params
   
    const  [artistDescription, updateArtistDescription] = useState([])
    const  [artistName, updateArtistName] = useState([])
    const  [artistImg, updateArtistImg] = useState([])
    const  [artistSongs, updateArtistSongs] = useState([])
    const  [artistAlbums, updateArtistAlbums] = useState([])
    
    let descripTempList=[]
    let nameTempList=[]
    let imgTempList=[]
    let songsTempList=[]
    let albumsTempList=[]
    

    const getSingleArtist = async () =>{
        

        try{
            const singleArtistApiSearch = "https://yt-music-api.herokuapp.com/api/yt/artist/" + params.searchTerm
            const singleArtistResp = await fetch(singleArtistApiSearch)
            const singleArtistResult = await singleArtistResp.json()
          
            descripTempList.push(singleArtistResult.description)
            nameTempList.push(singleArtistResult.name)

            //images
            for(let img of singleArtistResult.thumbnails){

                imgTempList.push(img.url)
            }
            //albums
            for(let albums of singleArtistResult.products.albums.content){

                albumsTempList.push(albums)
            }
            


            //songs
            for(let songs of singleArtistResult.products.songs.content){

                songsTempList.push(songs)
            }
         
            
            

   
            updateArtistDescription(descripTempList)
            updateArtistName(nameTempList)
            updateArtistImg(imgTempList.pop())
            updateArtistAlbums(albumsTempList)
            updateArtistSongs(songsTempList)
           
        }
        catch(e){
            console.error(e)

        }
    }
  
    
    useEffect(() => {
        getSingleArtist()
    }, [])
    function copyLinkUrL() {
        navigator.clipboard.writeText(window.location.href)
    }



    return(<>
        <h1>{artistName}</h1> <button className="copy-button" onClick={copyLinkUrL}>copy</button>
            <img src={artistImg}></img>
            <div>

       <div>
           <div>

           <h2>Albums</h2>
           <ul>
      {artistAlbums.map((album, index) =>
                <li  key={index}>
                    {album.name}
                </li>
            )} 
            </ul>
            </div>
           <div>

           <h2>Songs</h2>
           <ul>
      {artistSongs.map((song, index) =>
                <li  key={index}>
                    {song.name}
                </li>
            )} 
            </ul>
            </div>
        <h2>Artist Information</h2>
        <p>
             {artistDescription[0]}
            </p>
            </div>
       </div>

        </>
    )
}


export default SingleArtist