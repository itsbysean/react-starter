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
    return (
      <div>
        <span style={{ marginLeft: '40px' }}>{helloworld.data}</span>
      </div>
    );
  }
}

HelloWorld.propTypes = {
  hellworld: PropTypes.shape({
    data: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired
  })
};
