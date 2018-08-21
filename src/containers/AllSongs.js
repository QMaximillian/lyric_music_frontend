import React, { Component } from 'react'
import SongCard from '../components/SongCard'
import { Card } from 'antd'

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

  handleSongFilter = (event, songToEdit) => {

  }


  handleSongEdit = (event, songToEdit) => {
    event.persist()
    const filteredSong = this.state.songs.filter(song => {
      // console.log(songToEdit.id)
      // console.log(song.id);
       return song.id === songToEdit.id
    })

    const stateCopy = this.state.songs.slice()
    // console.log(stateCopy)
    // console.log(filteredSong)
    let thisOne = stateCopy.find(element => {
      return element.attributes === filteredSong[0].attributes
      // console.log(element.attributes)
      // console.log(filteredSong[0].attributes);
    })

    // console.log();
    console.log(thisOne.attributes[event.target.name]);
    // console.log(thisOne[event.target.name])
    // this.setState({
    //   songs: stateCopy
    // })

    // stateCopy.find(element => {
    //   element.attributes === thisOne.attributes[event.target.name]
    //
    // })

      thisOne.attributes[event.target.name] = event.target.value

      this.setState({
        songs: stateCopy
      })

      console.log(stateCopy)
    }







    // const foundSong = stateCopy.find(filteredSong)
    // console.log(foundSong);

    // const newSongs = this.state.songs.slice()
    // newSongs
    //
    // console.log(event);
    //
    // this.setState({
    //   [event.target.name]: event.target.value
    // }, () => console.log(this.state))



  mappedSongs = () => {
    return this.state.songs.map(song => {
      return <div style={{padding: '30px' }}>
        <SongContainer
          handleSongFilter={this.handleSongFilter}
          handleSongEdit={this.handleSongEdit} key={`name-${song.attributes.name}`}
          song={song}/>

      </div>
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
