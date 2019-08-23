import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { apiMiddleware } from 'redux-api-middleware';
import { preMiddleware } from './preMiddleware';
import { postMiddleware } from './postMiddleware';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../reducers';
import initialState from '../reducers/initialState';

export const history = createBrowserHistory();

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['router']
};

const devEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = [];
const middleware = [
  preMiddleware,
  apiMiddleware,
  postMiddleware,
  routerMiddleware(history)
];

const composedEnhancers = compose(
  devEnhancers(applyMiddleware(...middleware)),
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
