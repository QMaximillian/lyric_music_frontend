import React, { Component } from 'react'
import { Dropdown, Button, Input, Form } from 'semantic-ui-react'
// import { Form, Button, Dropdown, Card, Input, Layout } from 'antd'

const options = [
  {key: 1, text: "Words Similar", value: "ml"},
  {key: 2, text: "Sound Like", value: "sl"},
  {key: 3, text: "Rhymes", value: "rel_rhy"},
  {key: 4, text: "Associated Words", value: "rel_trg"},
]

const scrollBoxStyle = {
  height: '120px',
  width:'120px',
  border:'1px solid #ccc',
  font:'16px/26px Georgia, Garamond, Serif',
  overflow: 'auto',
  'marginLeft': '370px',
  display: 'inline-block'
}


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

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleInputChange = (event) => {
    this.setState({
      queryWord: event.target.value
    }, () => console.log(this.state.queryWord))
  }

  render(){
    const { value } = this.state

    return (
      <span>
        <Form
          onFocus={this.props.handleTextAreaOnFocus}
          onBlur={this.props.handleTextAreaOnBlur}
          onSubmit={this.fetchRhymingDictionary}>

          <div style={{display: 'inline-block'}}>
            <div style={{display: 'inline-block'}}>
              <select onChange={this.handleChange}
                // options={options}
                placeholder='Pick a sort option'
                selection
                value={value}>
                <option value="ml">Words Similar</option>
                <option value="sl">Sound Like</option>
                <option value="rel_rhy">Rhymes With</option>
                <option value="rel_trg">Associated Words</option>
              </select>
            </div>
            <div style={scrollBoxStyle}>
              {this.displayDictResults()}
            </div>
          </div>

          <Input placeholder="Get Ideas" value={this.state.queryWord} name="queryWord" onChange={this.handleInputChange}/>
          <Button>Submit</Button>
         </Form>
      </span>
    )
  }
}
