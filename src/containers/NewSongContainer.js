import React, { Component } from 'react'
import SongView from '../components/SongView'
import ResponsivePiano from '../components/ResponsivePiano'
import RhymingDict from '../components/RhymingDict'
import AllSongs from './AllSongs'


export default class NewSongContainer extends Component {

  state = {
    songName: "",
    lyric: "",
    music: "",
    inTextAreas: false,
    allSongs: false
  }

  // If your in the textarea (SongView)
  // The piano shortcut keys will be disabled (ResponsivePiano)
  // If you click out of the space the keyboard shortcuts are re-enabled

  handleTextAreaOnFocus = (event) => {
    event.persist()
      this.setState({
        inTextAreas: true
      }, () => console.log(this.state))
  }

  handleTextAreaOnBlur = (event) => {
    event.persist()
      this.setState({
        inTextAreas: false
      }, () => console.log(this.state))
  }

  // handleKeyboardOff = (event, secondThing) => {
  //   if (this.state.inTextAreas === true) {
  //
  //   } else {
  //
  //   }
  // }



  handleSongChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSongSubmit = (event) => {
    console.log(this.state);
    let songBody = {
      type: "songs",
      attributes: {
        name: this.state.songName,
        lyric: this.state.lyric,
        music: this.state.music,
        user_id: null
      }
    }

    event.preventDefault()
    fetch('http://localhost:3001/api/v1/songs', {
        method: 'POST',
        body: JSON.stringify(songBody),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(console.log)
  }

  handleChangeAllSongs = () => {
    this.setState(prevState => ({
      ...prevState,
      allSongs: !prevState.allSongs
    }), () => console.log(this.state))
  }



  render(){
    return(
      <div>
        <button onClick={this.handleChangeAllSongs}>Change Mode</button>
      {(this.state.allSongs ?
        <AllSongs /> :
          <div>
            <RhymingDict
              handleTextAreaOnBlur={this.handleTextAreaOnBlur}
              handleTextAreaOnFocus={this.handleTextAreaOnFocus}
            />
            <SongView
              handleSongChange={this.handleSongChange}
              handleSongSubmit={this.handleSongSubmit}
              handleTextAreaOnFocus={this.handleTextAreaOnFocus}
              handleTextAreaOnBlur={this.handleTextAreaOnBlur}
            />
            <ResponsivePiano
              stateOfTextArea={this.state.inTextAreas}
            />
          </div>
      )}
    </div>
    )
  }
}
