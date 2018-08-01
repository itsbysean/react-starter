import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from '../reducers';
import initialState from '../reducers/initialState';

export const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
