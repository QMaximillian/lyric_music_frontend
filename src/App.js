import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AllSongs from './containers/AllSongs'
import NavBar from './components/NavBar'
import SongContainer from './containers/SongContainer'

const App = () => {
    return (
      <Router>
        <div >
          <NavBar />
          <Route exact path='/' component={SongContainer}/>
          <Route exact path="/songs" component={AllSongs} />
        </div>
    </Router>
    );
}

export default App;
