import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { getHelloWorld } from '../../actions/helloworld/helloWorldAction';

class HelloWorldContainer extends Component {
  static defaultProps = {
    helloworld: {
      data: '',
      loading: true,
      error: false
    }
  };

  componentDidMount() {
    const { getHelloWorld } = this.props;
    getHelloWorld();
  }

  render() {
    const { children, helloworld } = this.props;
    const newProps = {
      helloworld
    };
    return React.cloneElement(children, { ...newProps });
  }
}

HelloWorldContainer.propTypes = {
  hellworld: PropTypes.shape({
    data: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired
  }),
  getHelloWorld: PropTypes.func.isRequired
};

const mapStateToProps = ({ helloworld }) => {
  return {
    helloworld
  };
};

const mapDispatchToProps = {
  getHelloWorld
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloWorldContainer);
