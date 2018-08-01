import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class HelloWorld extends Component {
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

  render() {
    const { helloworld } = this.props;
    return <div>{helloworld.data}</div>;
  }
}

HelloWorld.propTypes = {
  hellworld: PropTypes.shape({
    data: PropTypes.string,
    loading: PropTypes.bool,
    error: PropTypes.bool
  }),
  getHelloWorld: PropTypes.func
};
