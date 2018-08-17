import React, { Component } from 'react'
import { Form, TextArea } from 'semantic-ui-react'

export default class SongView extends Component {

  state = {
    songName: "",
    lyric: "",
    music: ""
  }

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

  render() {
    return(
      <Form onSubmit={this.handleSongSubmit}>
        <TextArea
          name="songName"
          placeholder="Song Name"
          // value={this.state.songName}
          onChange={(event) => this.handleSongChange(event)} />
        <TextArea
          name="lyric"
          placeholder="Lyrics"
          // value={this.state.lyric}
          onChange={(event) => this.handleSongChange(event)}
          />
        <TextArea
          name="music"
          // value={this.state.music}
          placeholder="Music"
          onChange={(event) => this.handleSongChange(event)}/>
        <input type="submit"></input>
      </Form>
    )
  }
}
