import React, { Component } from 'react'
// import SongCard from '../components/SongCard'
import { Col, Row } from 'antd'

import SongContainer from './SongContainer'
import NewSongContainer from './NewSongContainer'




export default class AllSongs extends Component {


  state = {
    songs: [],
    create: false
  }

  componentDidMount(){
    this.fetchSongs()
  }

  fetchSongs = () => {
  fetch('http://localhost:3001/api/v1/songs')
  .then(resp => resp.json())
  .then(allSongs => this.setState({
    songs: allSongs.data
    }))
  }


  // mappedSongs = () => {
  //   return this.state.songs.map(song => {
  //     return <div style={{padding: '30px' }}>
  //       <Card style={{ width: 300 }}>
  //           <SongCard key={`name-${song.attributes.name}`} song={song}/>
  //       </Card>
  //
  //     </div>
  //   })
  // }

  handleSongEdit = (event, songToEdit) => {

    const filteredSong = this.state.songs.filter(song => {
       return song.id === songToEdit.id
    })

    const stateCopy = this.state.songs.slice()



    let thisOne = stateCopy.find(element => {
      return element.attributes === filteredSong[0].attributes
      console.log(element.attributes);
    })
      thisOne.attributes[event.target.name] = event.target.value

      this.setState({
        songs: stateCopy
      })
  }

  handleSongDelete = (song) => {
    fetch(`http://localhost:3001/api/v1/songs/${song.id}`, {
      method: "DELETE",
      body: JSON.stringify(song),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })

    let songsCopy = this.state.songs.slice()

    if (songsCopy.indexOf(song) > -1) {
      songsCopy.splice(songsCopy.indexOf(song), 1)
      this.setState({songs: songsCopy})
    }
  }

    handlePatch = (song) => {
      // console.log(song.attributes.lyric)
      // let song = {
      //   type: "songs",
      //     attributes: {
      //       name: song.attributes.name,
      //       lyric: lyric,
      //       music: music,
      //       user_id: null
      //     }
      // }
      fetch(`http://localhost:3001/api/v1/songs/${song.id}`, {
        method: "PATCH",
        body: JSON.stringify(song),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(console.log)
    }





  mappedSongs = () => {
    return this.state.songs.map(song => {
      // return <div style={{padding: '30px' }}>

    return <Row xs={2}>
        <Col xl={10}>
        <SongContainer
          handlePatch={this.handlePatch}
          handleSongFilter={this.handleSongFilter}
          handleSongEdit={this.handleSongEdit}
          handleSongDelete={this.handleSongDelete}
          key={`name-${song.attributes.name}`}
          song={song}
        />
      </Col>
    </Row>


    })
  }



    render(){
      console.log(this.state, "AllSongs")
      return(
        <div>
          {this.state.create ? <NewSongContainer /> : this.mappedSongs()}
        </div>
      )
    }
}
