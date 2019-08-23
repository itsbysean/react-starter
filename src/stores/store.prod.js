import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { apiMiddleware } from 'redux-api-middleware';
import { preMiddleware } from './preMiddleware';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../reducers';
import initialState from '../reducers/initialState';

export const history = createBrowserHistory();

const persistConfig = {
  key: 'root',
  storage
};

const enhancers = [];
const middleware = [preMiddleware, apiMiddleware, routerMiddleware(history)];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

const createdStore = createStore(
  persistedReducer,
  initialState,
  composedEnhancers
);

export const store = createdStore;
export const persistor = persistStore(createdStore);
