import React, { Component } from 'react'
import { Form, TextArea } from 'semantic-ui-react'

export default class SongView extends Component {

  
  render() {
    return(
      <Form onSubmit={this.handleSongSubmit}>
        <TextArea
          name="songName"
          placeholder="Song Name"
          // value={this.state.songName}
          onChange={(event) => this.props.handleSongChange(event)} />
        <TextArea
          name="lyric"
          placeholder="Lyrics"
          // value={this.state.lyric}
          onChange={(event) => this.props.handleSongChange(event)}
          />
        <TextArea
          name="music"
          // value={this.state.music}
          placeholder="Music"
          onChange={(event) => this.props.handleSongChange(event)}/>
        <input type="submit"></input>
      </Form>
    )
  }
}
