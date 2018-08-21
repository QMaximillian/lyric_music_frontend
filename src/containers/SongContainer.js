import React, { Component } from 'react'
// import SongCardEdit from '../components/SongCardEdit'
import SongCard from '../components/SongCard'
import SongView from '../components/SongView'


export default class SongContainer extends Component {

  state = {
    edit: false,
    // song: ''
  }




  handleEditState = () => {
    console.log("Running")
    this.setState({
      edit: true
    }, () => console.log)
  }


  render() {
    // console.log(this.state.song)
    return(
      <div>
        {this.state.edit ? <SongView song={this.state.song} /> : <SongCard handleEditState={this.handleEditState} song={this.props.song}/>}
      </div>
    )
  }
}
