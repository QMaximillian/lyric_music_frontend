import React, { Component } from 'react'
import SongView from '../components/SongView'
import ResponsivePiano from '../components/ResponsivePiano'
import RhymingDict from '../components/RhymingDict'


export default class SongContainer extends Component {

  state = {
    songName: "",
    lyric: "",
    music: ""
  }

  // If your in the textarea (SongView)
  // The piano shortcut keys will be disabled (ResponsivePiano)
  // If you click out of the space the keyboard shortcuts are re-enabled

  handleSongChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log(this.state))
  }

  handleSongSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3001/api/v1/songs', {
        method: 'POST',
        body: JSON.stringify({
          id: "7",
          type: "songs",
          attributes: {
            name: this.state.songName,
            lyric: this.state.lyric,
            music: this.state.music,
            user_id: null
          }
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(console.log)
  }


  render(){
    return(
      <div>
        <RhymingDict />
        <SongView
          handleSongChange={this.handleSongChange}
          handleSongSubmit={this.handleSongSubmit}
        />
        <ResponsivePiano />
      </div>
    )
  }
}
