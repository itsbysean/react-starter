import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import _ from 'lodash';

import { login } from '../../actions/auth/authAction';

class LoginContainer extends Component {
  static defaultProps = {
    auth: {
      data: {},
      loading: true,
      error: false
    },
    login: () => {}
  };

  componentDidUpdate() {
    const { token } = this.props.auth.data;
    if (!_.isEmpty(token)) {
      this.props.push('/dashboard');
    }
  }

  render() {
    const { children, login, auth } = this.props;
    const loginFormProps = {
      login
    };
    return React.cloneElement(children, { ...loginFormProps });
  }
}

LoginContainer.propTypes = {
  auth: PropTypes.shape({
    data: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired
  }),
  login: PropTypes.func.isRequired
};

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

const mapDispatchToProps = {
  login,
  push
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
