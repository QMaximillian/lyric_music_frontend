import React, { Component } from 'react'
import { Form, TextArea, Button, Input } from 'semantic-ui-react'


export default class SongViewEdit extends Component {



  //
  // handleChangeTry = () => {
  //   this.setState({
  //     songName: event.target.songName
  //     songName: event.target.lyric
  //     songName: event.target.music
  //
  //   })
  // }






  //   event.preventDefault()
  //   fetch('http://localhost:3001/api/v1/songs', {
  //       method: 'POST',
  //       body: JSON.stringify(songBody),
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //       }
  //     })
  //     .then(console.log)
  // }

  // let songBody = {
  //   type: "songs",
  //   attributes: {
  //     name: songName,
  //     lyric: lyric,
  //     music: music,
  //     user_id: null
  //   }
  // }

  // let song = {
  //   type: "songs",
  //     attributes: {
  //       name: songName,
  //       lyric: lyric,
  //       music: music,
  //       user_id: null
  //     }
  // }




  render() {
    console.log(this.props.song.attributes)
    return(
      <React.Fragment>
      <Form
        onBlur={this.props.handleTextAreaOnBlur}
        onFocus={this.props.handleTextAreaOnFocus}
        className="ui grid container"
        onSubmit={this.props.handlePatch(this.props.song)}>

        <Input
          style={{ width:"100px", height:"100px" }}
          name="songName"
          placeholder={"Song Name"}
          value={this.props.song.attributes.name}
          onChange={(event) => this.props.handleSongEdit(event, this.props.song)} />
        <Input
          style={{ width:"100px", height:"100px" }}
          name="userName"
          placeholder="User Name"
          // value={this.state.songName}
          onChange={(event) => this.props.handleSongEdit(event, this.props.song)} />
        <TextArea
          style={{ width:"300px", height:"300px" }}
          name="lyric"
          placeholder="Lyrics"
          value={this.props.song.attributes.lyric}
          onChange={(event) => this.props.handleSongEdit(event, this.props.song)}
          />
        <TextArea
          style={{ width:"300px", height:"300px" }}
          name="music"
          // value={this.state.music}
          placeholder="Music"
          onChange={(event) => this.props.handleSongEdit(event, this.props.song)}
          value={this.props.song.attributes.music}
        />
        <Button
          className="massive ui button" type="Submit">Submit</Button>
      </Form>
    </React.Fragment>
    )
  }
}
