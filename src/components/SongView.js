import React, { Component } from 'react'
import { Form, TextArea, Button } from 'semantic-ui-react'

export default class SongView extends Component {


  render() {
    return(
      <React.Fragment>
      <Form
        onFocus={this.props.handleInTextArea}
        className="ui grid container" onSubmit={this.props.handleSongSubmit}>
        <TextArea
          // onFocus={console.log("Focused")}
          name="songName"
          placeholder="Song Name"
          // value={this.state.songName}
          onChange={(event) => this.props.handleSongChange(event)} />
        <TextArea
          name="lyric"
          placeholder="Lyrics"
          // value={this.state.lyric}
          onChange={(event) => this.props.handleSongChange}
          />
        <TextArea
          name="music"
          // value={this.state.music}
          placeholder="Music"
          onChange={(event) => this.props.handleSongChange}/>
        <Button
          className="massive ui button" type="Submit">Submit</Button>
      </Form>
    </React.Fragment>
    )
  }
}
// SOUND
