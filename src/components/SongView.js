import React, { Component } from 'react'
import { Form, TextArea, Button, Input } from 'semantic-ui-react'


export default class SongView extends Component {


  // state = {
  //   songName: this.props.songName,
  //   lyric: this.props.lyric,
  //   music: this.props.music,
  // }
  //
  // handleChangeTry = () => {
  //   this.setState({
  //     songName: event.target.songName
  //     songName: event.target.lyric
  //     songName: event.target.music
  //
  //   })
  // }


  render() {
    console.log(this.props)
    return(
      <React.Fragment>
      <Form
        onBlur={this.props.handleTextAreaOnBlur}
        onFocus={this.props.handleTextAreaOnFocus}
        className="ui grid container" onSubmit={this.props.handleSongSubmit}>
        <Input
          style={{ width:"100px", height:"100px" }}
          name="songName"
          placeholder={"Song Name"}
          // value={this.props.song.attributes.name}
          onChange={(event) => this.props.handleSongChange(event)} />
        <Input
          style={{ width:"100px", height:"100px" }}
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
