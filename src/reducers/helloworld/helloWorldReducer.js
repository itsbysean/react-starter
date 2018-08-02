import { HELLOWORLD_SUCCESS } from '../../actions/helloworld/helloWorldAction';
import initialState from '../initialState';

export const helloWorldReducer = (state = initialState.helloworld, action) => {
  switch (action.type) {
    case HELLOWORLD_SUCCESS: {
      return Object.assign({}, state, {
        data: action.payload.data,
        loading: false
      });
    }
    default:
      return state;
  }
};
