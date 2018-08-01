import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { getHelloWorld } from '../../actions/helloworld/helloWorldAction';

class HelloWorldContainer extends Component {
  constructor(props) {
    super(props);
  }

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
    data: PropTypes.string,
    loading: PropTypes.bool,
    error: PropTypes.bool
  }),
  getHelloWorld: PropTypes.func
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
