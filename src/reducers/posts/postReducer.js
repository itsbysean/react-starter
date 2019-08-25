import { Map } from 'immutable';

import {
  POST_FETCH_REQUEST,
  POST_FETCH_SUCCESS,
  POST_FETCH_FAILURE
} from '../../actions/post/postAction';
import initialState from '../initialState';

export const postReducer = (state = initialState.posts, action) => {
  switch (action.type) {
    case POST_FETCH_REQUEST:
      return Map(state)
        .set('loading', true)
        .toJS();
    case POST_FETCH_SUCCESS:
      return Map(initialState.posts)
        .set('data', action.payload)
        .set('loading', false)
        .toJS();
    case POST_FETCH_FAILURE:
      return Map(initialState.posts)
        .set('data', action.payload)
        .set('error', true)
        .toJS();
    default:
      return state;
  }
};
