import React, { Component } from 'react'
import SongCard from '../components/SongCard'
import { Card } from 'antd'

import SongContainer from './SongContainer'




export default class AllSongs extends Component {


  state = {
    songs: [],
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

  mappedSongs = () => {
    return this.state.songs.map(song => {
      return <div style={{padding: '30px' }}>
        <SongContainer key={`name-${song.attributes.name}`} song={song}/>

      </div>
    })
  }

  // songCardEdit = (props) => {
  //   this.state.songs.filter(song => {
  //     song.attributes.id === props.song.attributes.id
  //        console.log("Here")
  //     return <SongCardEdit />
  //   })
  // }




    render(){
      return(
        <div>
          {this.mappedSongs()}
        </div>
      )
    }
}
