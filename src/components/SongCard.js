import React from 'react'
import { Card, Header, Segment } from 'semantic-ui-react'


const SongCard = (props) => {


  // const newLyric = () => {
    // a click on the field surrounding the lyrics will reveal a text field that allows you to edit the lyrics
    // when done editing lyrics, click save to POST to rails songs database
  // }

  return(
    <Card>
      <Segment>
        {console.log(props.song.attributes)}
        <Header as='h3' textAlign='center'>
          {props.song.attributes.name}
        </Header>
        <Segment as='h3' textAlign='left'>
          <h5>{props.song.attributes.lyric}</h5>
        </Segment>
        <Segment as='h3' textAlign='right'>
          <h5>{props.song.attributes.music}</h5>
        </Segment>
      </Segment>
    </Card>
  )
}


export default SongCard
