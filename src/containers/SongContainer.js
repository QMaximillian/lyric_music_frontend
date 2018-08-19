import React, { Component } from 'react'
import SongView from '../components/SongView'
import ResponsivePiano from '../components/ResponsivePiano'
import RhymingDict from '../components/RhymingDict'


export default class SongContainer extends Component {


  render(){
    return(
      <div>
        <RhymingDict />
        <SongView />
        <ResponsivePiano />
      </div>
    )
  }
}
