import { HELLOWORLD } from '../../actions/helloworld/helloWorldAction';
import initialState from '../initialState';

export const helloWorldReducer = (state = initialState.helloworld, action) => {
  switch (action.type) {
    case HELLOWORLD: {
      return Object.assign({}, state, { data: action.payload, loading: false });
    }
    default:
      return state;
  }
};
