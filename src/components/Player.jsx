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
      },
    };
    return (
      <div>

        <Youtube videoId={this.props.videoId} opts={opts} onReady={this.onReady}
        />
        <div className="PlayerButtons">

        <button onClick={() => { playState.target.pauseVideo() }}>paus</button>
        
        </div>

      </div>


    )
  }



}

export default Player