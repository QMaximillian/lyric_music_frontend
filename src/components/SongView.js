import React, { Component } from 'react'
import { Form, TextArea, Button, Input } from 'semantic-ui-react'


export default class SongView extends Component {

  // static getDerivedStateFromProps(props, state, prevProps) {
  //   if (this.prevProps === null || this.prevProps.song !== this.props.song) {
  //     return {song: this.props.song}
  //   } else {
  //     return null
  //   }
  //
  // }

  render() {
    console.log(this.props.song)
    return(
      <React.Fragment>
      <Form
        onBlur={this.props.handleTextAreaOnBlur}
        onFocus={this.props.handleTextAreaOnFocus}
        className="ui grid container" onSubmit={this.props.handleSongSubmit}>
        <Input
          style={{ width:"100px", height:"100px" }}
          // onFocus={console.log("Focused")}
          name="songName"
          placeholder={"Song Name"}
          // value={this.props.song.attributes.name}
          // value={this.props.song.attributes.name}
          onChange={(event) => this.props.handleSongChange(event)} />
        <Input
          style={{ width:"100px", height:"100px" }}
          // onFocus={console.log("Focused")}
          name="userName"
          placeholder="User Name"
          // value={this.state.songName}
          onChange={(event) => this.props.handleSongChange(event)} />
        <TextArea
          style={{ width:"300px", height:"300px" }}
          name="lyric"
          placeholder="Lyrics"
          // value={this.props.song.attributes.lyric}
          onChange={(event) => this.props.handleSongChange(event)}
          />
        <TextArea
          style={{ width:"300px", height:"300px" }}
          name="music"
          // value={this.state.music}
          placeholder="Music"
          onChange={(event) => this.props.handleSongChange(event)}
          // value={this.props.song.attributes.music}
        />
        <Button
          className="massive ui button" type="Submit">Submit</Button>
      </Form>
    </React.Fragment>
    )
  }
}
// SOUND
