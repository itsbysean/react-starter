import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import { ConnectedRouter } from 'connected-react-router';
import { store, persistor, history } from './stores/configureStore';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
