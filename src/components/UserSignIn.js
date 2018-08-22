import React, { Component } from 'react'
import { Input, Button, Form } from 'antd'

class UserSignIn extends Component {

  state = {
    user: ''
  }

  handleUserChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSongSubmit = (event) => {
    let userBody = {
      type: "users",
      attributes: {
        name: this.state.user
      }
    }
    fetch('http://localhost:3001/api/v1/users', {
        method: 'POST',
        body: JSON.stringify(userBody),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }, () => console.log())
  }

  render() {
    console.log(this.state)
  return(
    <div>
      <Form onSubmit={(event) => this.handleSongSubmit(event)}>
        <Input
          onChange={(event) => this.handleUserChange(event)}
          name='user'>
        </Input>
        <Button>
          Sign-In
        </Button>
      </Form>

    </div>
  )}
}

export default UserSignIn
