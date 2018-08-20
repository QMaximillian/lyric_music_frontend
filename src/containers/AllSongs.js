import React, { Component } from 'react'
import SongCard from '../components/SongCard'
import { Card } from 'antd'



export default class AllSongs extends Component {


  state = {
    songs: []
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

  mappedSongs = () => {

    return this.state.songs.map(song => {
      return <div style={{padding: '30px' }}>
        <Card style={{ width: 300 }}>
            <SongCard key={song.attributes.name} song={song}/>

        </Card>
      </div>

    })
  }

    render(){

      return(
        <div>
          {this.mappedSongs()}
        </div>
      )
    }
}
