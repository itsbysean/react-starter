import { RSAA } from 'redux-api-middleware';
import { push } from 'connected-react-router';

import { AUTH_API } from '../common/symbol/authSymbol';
import { LOGOUT_REQUEST } from '../actions/auth/authAction';

export const authMiddleware = store => next => action => {
  if (action.type === LOGOUT_REQUEST) {
    store.dispatch(push('/login'));
  } else {
    const { auth } = store.getState();
    const request = action[AUTH_API];

    if (typeof request === 'undefined') {
      return next(action);
    } else {
      const { token } = auth.data;
      if (token) {
        const apiRequest = request[RSAA];
        apiRequest.headers = { Authorization: 'Bearer ' + token };
        return next(request);
      } else {
        store.dispatch(push('/login'));
      }
    }
  }
};
