import React from 'react'
import Youtube from 'react-youtube'

var playState = null;


class Player extends React.Component {
  constructor(props) {
    super(props)
  }
  onReady(event) {
    playState = event
    
 
    playState.target.playVideo()
  }
  
  
  
  render() {
   
    
    const opts = {
      height: '0',
      width: '0',
      playerVars: {
        autoplay: 1,
        listType:'playlist',
        list:this.props.browseId

      },
    };
   
    return (
      <div>

        <Youtube videoId={this.props.videoId} opts={opts} onReady={this.onReady}/>
        <div>

    
        <div className="PlayerButtons">
        <button onClick={() => {playState.target.previousVideo()}}>previous</button>
        <button onClick={() => {playState.target.pauseVideo()}}>paus</button>
        <button onClick={() => {playState.target.playVideo()}}>play</button>
        <button onClick={() => {playState.target.nextVideo()}}>next</button>
        </div>
        
        </div>

      </div>


    )
  }



}

export default Player