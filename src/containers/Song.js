import React, { Component } from 'react'
import Music from '../components/Music.js'
import Lyric from '../components/Lyric.js'

export default class Song extends Component {

  render(){
    return(
      <div>
       <Lyric />
       <Music />
      </div>
    )
  }
}
