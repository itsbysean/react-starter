import { createStore, applyMiddleware, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';

import rootReducer from '../reducers';
import initialState from '../reducers/initialState';

const middleware = applyMiddleware(apiMiddleware);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(apiMiddleware),
    composeEnhancers(middleware)
  )
);
