import React from 'react'
import Youtube from 'react-youtube'

var playState = null;


class Player extends React.Component {
  constructor(props) {
    super(props)
  }
  onReady(event) {
    playState = event
    
  /*   playState.target.loadPlayList() */
    playState.target.playVideo()
  }
  
  /* onPlayListReady(event){
    playState = event
  } */
  
  render() {
   
    
    const opts = {
      height: '300',
      width: '300',
      playerVars: {
        autoplay: 1,
        listType:'playlist',
        list:this.props.browseId

      },
    };
   
    return (
      <div>

        <Youtube videoId={this.props.videoId} opts={opts} onReady={this.onReady}/>
        <div className="PlayerButtons">
        </div>
        <div>

     {/*   <Youtube  onReady={this.onPlayListReady} opts={opts}/>  */}
        <button onClick={() => {playState.target.previousVideo()}}>previous</button>
        <button onClick={() => {playState.target.pauseVideo()}}>paus</button>
        <button onClick={() => {playState.target.playVideo()}}>play</button>
        <button onClick={() => {playState.target.nextVideo()}}>next</button>
        
        </div>

      </div>


    )
  }



}

export default Player