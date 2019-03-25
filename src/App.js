import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import _ from 'lodash';

import CssBaseline from '@material-ui/core/CssBaseline';
import MainLayout from './components/layout/MainLayout';
import LoginLayout from './components/layout/LoginLayout';

import withRoot from './withRoot';

function SecuredRoute({ isAuthenticated, render }) {
  return (
    <Route
      render={props =>
        isAuthenticated ? (
          render()
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

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
    const { token } = this.props.auth.data;
    return (
      <React.Fragment>
        <CssBaseline />
        <Switch>
          <Route exact path="/login" component={LoginLayout} />
          <SecuredRoute
            isAuthenticated={!_.isEmpty(token)}
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

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(withRoot(App));
