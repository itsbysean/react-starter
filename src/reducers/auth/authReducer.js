import { Map } from 'immutable';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST
} from '../../actions/auth/authAction';
import initialState from '../initialState';

export const loginReducer = (state = initialState.auth, action) => {
  switch (action.type) {
    case LOGOUT_REQUEST:
      return initialState.auth;
    case LOGIN_REQUEST:
      return Map(state)
        .set('loading', true)
        .toJS();
    case LOGIN_SUCCESS:
      return Map(initialState.auth)
        .set('data', action.payload)
        .toJS();
    case LOGIN_FAILURE:
      return Map(initialState.auth)
        .set('data', action.payload)
        .set('error', true)
        .toJS();
    default:
      return state;
  }
};
