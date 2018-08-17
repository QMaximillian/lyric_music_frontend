import React, { Component } from 'react'

import SongView from '../components/SongView'

export default class SongContainer extends Component {

  state = {
    songName: "",
    lyric: "",
    music: ""

  }

  handleSongChange = (event) => {                   this.setState({
      [event.target.name]: event.target.value
    }, () => console.log(this.state))
  }

  render(){
    return(
      <div>
        <SongView handleSongChange={this.handleSongChange} />
      </div>
    )
  }
}
