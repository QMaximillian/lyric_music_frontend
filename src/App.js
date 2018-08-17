import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AllSongs from './components/AllSongs'
import NavBar from './components/NavBar'
import UserSignIn from './components/UserSignIn.js'

const App = (props) => {
    return (
      <Router>
        <div >
          <NavBar />
          <Route exact path='/' component={UserSignIn}/>
          <Route exact path="/songs" component={AllSongs} />
        </div>
    </Router>
    );
}

export default App;
