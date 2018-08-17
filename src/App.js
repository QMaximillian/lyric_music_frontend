import React, { Component } from 'react';
import Song from './containers/Song'
import UserSignIn from './components/UserSignIn.js'

class App extends Component {
  render() {
    return (
      <div >
        <UserSignIn />
      </div>
    );
  }
}

export default App;
