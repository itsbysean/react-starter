import React, { Component } from 'react';

import LoginForm from './LoginForm';
import LoginContainer from '../../containers/user/LoginContainer';

export default class LoginPage extends Component {
  render() {
    return (
      <LoginContainer>
        <LoginForm />
      </LoginContainer>
    );
  }
}
