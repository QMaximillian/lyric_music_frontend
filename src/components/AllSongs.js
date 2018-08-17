import React, { Component } from 'react'


export default class AllSongs extends Component {

  fetchSongs = () => {
  fetch('localhost:3001/api/v1/songs')
  .then(resp => resp.json())
  .then(console.log)
  }

  render(){
    return(
      <div>
        I'M HERE
      </div>
    )
  }
}
