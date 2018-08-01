import { combineReducers } from 'redux';

import { helloWorldReducer } from './helloworld/helloWorldReducer';

const rootReducer = combineReducers({
  helloworld: helloWorldReducer
});

export default rootReducer;
