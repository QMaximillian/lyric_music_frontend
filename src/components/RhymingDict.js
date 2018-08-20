import React, { Component } from 'react'
// import { Button, Input, Form, Grid } from 'semantic-ui-react'
import { Dropdown } from 'antd'

const options = [
  {key: 1, text: "ML", value: "ml"},
  {key: 2, text: "SL", value: "sl"},
  {key: 3, text: "Rel_Rhy", value: "rel_rhy"},
  {key: 4, text: "Rel_Trg", value: "rel_trg"},
]



export default class RhymingDict extends Component {

  state = {
      results: [],
      value: '',
      queryWord: ''
  }

  fetchRhymingDictionary = () => {
    fetch(`https://api.datamuse.com/words?${this.state.value}=${this.state.queryWord}`)
    .then(resp => resp.json())
    .then(words => this.setState({
        results: words
      }, () => console.log(words)))
    }

  displayDictResults = () => {
    return this.state.results.map(result => {
        return <p>{result.word}</p>
  })}

  handleChange = (e, { value }) => this.setState(
      { value }
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
        <div>


        {/* <Form
          onFocus={this.props.handleTextAreaOnFocus}
          onBlur={this.props.handleTextAreaOnBlur}
           onSubmit={this.fetchRhymingDictionary}>
          <Grid columns={2}>
            <Grid.Column>
              <Dropdown
                onChange={this.handleChange}
                options={options}
                placeholder='Pick a sort option'
                selection
                value={value}
              />
            </Grid.Column>
            <Grid.Column>
              {this.displayDictResults()}
            </Grid.Column>
          </Grid>
        <Input value={this.state.queryWord} name="queryWord" onChange={this.handleInputChange}/>
        <Button>Submit</Button>
       </Form> */}
     </div>



    )
  }
}
