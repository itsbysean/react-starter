import {
  POST_FETCH_REQUEST,
  POST_FETCH_SUCCESS,
  POST_FETCH_FAILURE
} from '../../actions/post/postAction';
import initialState from '../initialState';

export const postReducer = (state = initialState.posts, action) => {
  switch (action.type) {
    case POST_FETCH_REQUEST: {
      return Object.assign({}, state, { loading: true });
    }
    case POST_FETCH_SUCCESS: {
      return Object.assign({}, state, {
        data: action.payload,
        loading: false
      });
    }
    case POST_FETCH_FAILURE: {
      return Object.assign({}, state, { loading: false, error: true });
    }
    default:
      return state;
  }
};
