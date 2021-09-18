import React from 'react'


function Artists(props){


    return<>

        <h2>Artists</h2>
        {props.artistsArray.map(artist => <p key={artist.name}>
            
                 {artist.name}
           
        </p>)}
    </>
}


export default Artists