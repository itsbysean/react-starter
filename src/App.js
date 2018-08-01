import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HelloWorldPage from './components/helloworld/HelloWorldPage';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/helloworld">Hello World Page</Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/helloworld" component={HelloWorldPage} />
        </div>
      </Router>
    );
  }
}
