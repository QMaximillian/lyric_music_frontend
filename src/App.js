import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AllSongs from './containers/AllSongs'
import NavBar from './components/NavBar'
import NewSongContainer from './containers/NewSongContainer'
import { Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout

const App = () => {
    return (
      <Layout >
          <Router>
            <div>
              <Header style={{color:
                 'red'}}>
                <NavBar />
              </Header>
              <Content>
                <Route exact path='/' component={NewSongContainer}/>
              </Content>
              <Content>
                <Route exact path="/songs" component={AllSongs} />
              </Content>
            </div>
          </Router>
          <Footer>

          </Footer>
      </Layout>
    );
}

export default App;

// Getting textArea state into the keyboard DONE

//Fixing dropdown menu in Semantic React UI

//Posting to Rails database (Songs) DONE
//Posting User to DB
// Getting dropdown results to appear on page
