import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST
} from '../../actions/auth/authAction';
import initialState from '../initialState';

export const loginReducer = (state = initialState.auth, action) => {
  switch (action.type) {
    case LOGOUT_REQUEST: {
      return initialState.auth;
    }
    case LOGIN_SUCCESS: {
      return Object.assign({}, state, {
        data: action.payload,
        loading: false
      });
    }
    case LOGIN_FAILURE: {
      return Object.assign({}, state, {
        data: {},
        loading: false,
        error: true
      });
    }
    case LOGIN_REQUEST:
    default:
      return state;
  }
};
