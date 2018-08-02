import { combineReducers } from 'redux';

import { helloWorldReducer } from './helloworld/helloWorldReducer';
import { postReducer } from './posts/postReducer';

const rootReducer = combineReducers({
  helloworld: helloWorldReducer,
  posts: postReducer
});

export default rootReducer;
