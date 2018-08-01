import React, { Component } from 'react';

import HelloWorld from './HelloWorld';
import HelloWorldContainer from '../../containers/helloworld/HelloWorldContainer';

export default class HelloWorldPage extends Component {
  render() {
    return (
      <div>
        <HelloWorldContainer>
          <HelloWorld />
        </HelloWorldContainer>
      </div>
    );
  }
}
