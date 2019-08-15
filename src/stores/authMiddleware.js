import { RSAA } from 'redux-api-middleware';
import { push } from 'connected-react-router';

import { PUBLIC } from '../common/symbol/authSymbol';
import { LOGOUT_REQUEST } from '../actions/auth/authAction';

import _ from 'lodash';

export const authMiddleware = store => next => action => {
  if (action.type === LOGOUT_REQUEST) {
    store.dispatch(push('/login'));
  } else {
    const { auth } = store.getState();
    const unsecureApi = action[PUBLIC];
    if (!_.isNil(unsecureApi)) {
      // unsecure api call
      return next(unsecureApi);
    } else {
      const secureApi = action[RSAA];
      if (!_.isNil(secureApi)) {
        // default secure api call
        const { token } = auth.data;
        if (!_.isNil(token)) {
          secureApi['Authorization'] = 'Bearer ' + token;
        } else {
          store.dispatch(push('/login'));
        }
      }
      return next(action);
    }
  }
};
