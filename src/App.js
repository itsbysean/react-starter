import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import MainLayout from './components/layout/MainLayout';
import LoginLayout from './components/layout/LoginLayout';

import withRoot from './withRoot';

class App extends Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Switch>
          <Route exact path="/login" component={LoginLayout} />
          <Route
            render={() => (
              <MainLayout
                handleDrawerOpen={this.handleDrawerOpen}
                handleDrawerClose={this.handleDrawerClose}
                isOpenDrawer={this.state.open}
              />
            )}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRoot(App);
