import React, { Component } from 'react'
// import SongCardEdit from '../components/SongCardEdit'
import SongCard from '../components/SongCard'
import SongViewEdit from '../components/SongViewEdit'


export default class SongContainer extends Component {

  state = {
    delete: false,
    edit: false,
    songName: this.props.song.attributes.name,
    lyric: this.props.song.attributes.lyric,
    music: this.props.song.attributes.music,
    // song: ''
  }

  handleSongChange = (event) => {
    const {name, value} = event.target
    // console.log(event.target.name, event.target.value)
    this.setState({
      [name]: value
    }, () => console.log(this.state))
  }



  handleEditState = () => {
    // console.log("Running")
    this.setState({
      edit: true
    })
  }




  render() {
    // console.log(this.props.song.attributes.name)
    return(
      <div>
        {this.state.edit ?
          <SongViewEdit
            handlePatch={this.props.handlePatch}
            handleSongFilter={this.props.handleSongFilter}
            handleSongChange={this.handleSongChange}
            song={this.props.song}
            handleSongEdit={this.props.handleSongEdit}
            /> :
          <SongCard
            handleSongDelete={this.props.handleSongDelete}
            handleEditState={this.handleEditState} song={this.props.song}/>}
      </div>
    )
  }
}
