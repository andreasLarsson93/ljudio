import React from 'react'


function Albums(props) {

    return <>

        <h2>Albums</h2>
        
        
        {props.albumsArray.map(album => <p key={album.name}>
            
                 {album.name}
            
        </p>)}
</>
}


export default Albums