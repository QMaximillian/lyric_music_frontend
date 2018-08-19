import React, { Component } from 'react'
import { Button, Input, Form, Grid, Dropdown} from 'semantic-ui-react'

const options = [
  {key: 1, text: "ML", value: "ml"},
  {key: 2, text: "SL", value: "sl"},
  {key: 3, text: "Rel_Rhy", value: "rel_rhy"},
  {key: 4, text: "Rel_Trg", value: "rel_trg"},
]

export default class RhymingDict extends Component {

  state = {
      value: '',
      queryWord: ''
  }

  fetchRhymingDictionary = () => {
    fetch(`https://api.datamuse.com/words?${this.state.value}=${this.state.queryWord}`)
    .then(resp => resp.json())
    .then(console.log)
  }

  handleChange = (e, { value }) => this.setState(
    { value }, () => console.log(this.state)
  )

  handleInputChange = (event) => {
    this.setState({
      queryWord: event.target.value
    }, () => console.log(this.state.queryWord))
  }

  render(){
    const { value } = this.state
    // console.log(this.state.value)
    return (

        // {this.fetchRhymingDictionary()}

        <Form onSubmit={this.fetchRhymingDictionary}>
          <Grid columns={4}>
            <Grid.Column>
              <Dropdown
                onChange={this.handleChange}
                options={options}
                placeholder='Pick a sort option'
                selection
                value={value}
              />
            </Grid.Column>
          </Grid>
        <Input value={this.state.queryWord} name="queryWord" onChange={this.handleInputChange}/>
        <Button>Submit</Button>
       </Form>

    )
  }
}
