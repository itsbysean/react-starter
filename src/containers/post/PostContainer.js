import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { fetchPosts } from '../../actions/post/postAction';

class PostContainer extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    posts: {
      data: [],
      loading: true,
      error: false
    }
  };

  componentDidMount() {
    const { fetchPosts } = this.props;
    fetchPosts();
  }

  render() {
    const { children, posts } = this.props;
    const newProps = {
      posts
    };
    return React.cloneElement(children, { ...newProps });
  }
}

PostContainer.propTypes = {
  posts: PropTypes.shape({
    data: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired
  }),
  fetchPosts: PropTypes.func.isRequired
};

const mapStateToProps = ({ posts }) => {
  return {
    posts
  };
};

const mapDispatchToProps = {
  fetchPosts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostContainer);
