import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { postReducer } from './posts/postReducer';
import { loginReducer } from './auth/authReducer';

const rootReducer = history =>
  combineReducers({
    auth: loginReducer,
    posts: postReducer,
    router: connectRouter(history)
  });

export default rootReducer;
