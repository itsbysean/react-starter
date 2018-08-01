import {
  HELLOWORLD_REQUEST,
  HELLOWORLD_SUCCESS,
  HELLOWORLD_FAILURE
} from '../../actions/helloworld/helloWorldAction';
import initialState from '../initialState';

export const helloWorldReducer = (state = initialState.helloworld, action) => {
  switch (action.type) {
    case HELLOWORLD_REQUEST: {
      return Object.assign({}, state, { loading: true });
    }
    case HELLOWORLD_SUCCESS: {
      return Object.assign({}, state, {
        data: action.payload.data,
        loading: false
      });
    }
    case HELLOWORLD_FAILURE: {
      return Object.assign({}, state, { loading: false, error: true });
    }
    default:
      return state;
  }
};
