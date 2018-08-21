import React from 'react'
// import { Card, Header, Segment } from 'semantic-ui-react'
import { Card, Button } from 'antd'


const gridStyle = {
  width: '25%',
  textAlign: 'center',
  border: 'solid',
  borderColor: 'grey',
  width: 200,
  height: 200

}

const buttonStyle = {
  type: 'normal',
  'marginTop': '50px',
  'textAlign': 'center'
}

const SongCard = (props) => {


  // const newLyric = () => {
    // a click on the field surrounding the lyrics will reveal a text field that allows you to edit the lyrics
    // when done editing lyrics, click save to POST to rails songs database
  // }





  return(

    <Card.Grid style={gridStyle}>{props.song.attributes.name}
      <div>
      <Button onClick={(event) => props.handleEditState()} style={buttonStyle}>Edit Me</Button>
    </div>

    </Card.Grid>

  )
}


export default SongCard
