import React, { Component } from 'react';

class LoginContainer extends Component {
  render() {
    const { children } = this.props;
    return React.cloneElement(children);
  }
}

export default LoginContainer;
