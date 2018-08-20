import React from 'react'
// import { Card, Header, Segment } from 'semantic-ui-react'
import { Card, Button } from 'antd'

const gridStyle = {
  width: '25%',
  textAlign: 'center',
  border: 'solid',
  'border-color': 'grey',
  width: 200,
  height: 200

}

const buttonStyle = {
  type: 'normal',
  'margin-top': '50px',
  'text-align': 'center'
}

const SongCard = (props) => {


  // const newLyric = () => {
    // a click on the field surrounding the lyrics will reveal a text field that allows you to edit the lyrics
    // when done editing lyrics, click save to POST to rails songs database
  // }

  return(
    <Card.Grid style={gridStyle}>{props.song.attributes.name}
      <div>
      <Button style={buttonStyle}>Edit Me</Button>
    </div>


      {console.log(props.song.attributes)}
      {/* <p>

          {props.song.attributes.name}
        <p as='h3' textAlign='left'>
          {props.song.attributes.lyric}
        </p>
        <p as='h3' textAlign='right'>
          {props.song.attributes.music}
        </p>
      </p> */}

    </Card.Grid>

  )
}


export default SongCard
