import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HelloWorldPage from './components/helloworld/HelloWorldPage';
import PostPage from './components/post/PostPage';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/helloworld">Hello World Page</Link>
            </li>
            <li>
              <Link to="/post">Posts</Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/helloworld" component={HelloWorldPage} />
          <Route exact path="/post" component={PostPage} />
        </div>
      </Router>
    );
  }
}
