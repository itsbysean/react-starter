import { createStore, applyMiddleware, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';

import rootReducer from '../reducers';
import initialState from '../reducers/initialState';

export const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(apiMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
