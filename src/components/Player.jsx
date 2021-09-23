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

        </div>

      <footer>

    
        <div className="player-buttons">
        <button className="fa fa-fast-backward"  onClick={() => {playState.target.previousVideo()}}></button>
        <button className="fa fa-pause" onClick={() => {playState.target.pauseVideo()}}></button>
        <button className="fa fa-play" onClick={() => {playState.target.playVideo()}}></button>
        <button className="fa fa-fast-forward" onClick={() => {playState.target.nextVideo()}}></button>
        </div>    
      </footer>
      </div>


    )
  }



}

export default Player