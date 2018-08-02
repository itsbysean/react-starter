import React, { Component } from 'react';

import PostTable from './PostTable';
import PostContainer from '../../containers/post/PostContainer';

export default class PostPage extends Component {
  render() {
    return (
      <div>
        <PostContainer>
          <PostTable />
        </PostContainer>
      </div>
    );
  }
}
