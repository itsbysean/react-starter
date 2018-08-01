import { HELLOWORLD } from '../../actions/helloworld/helloWorldAction';

const init_state = {
  data: '',
  loading: true,
  error: false
};

export const helloWorldReducer = (state = init_state, action) => {
  switch (action.type) {
    case HELLOWORLD: {
      return Object.assign({}, state, { data: action.payload });
    }
    default:
      return state;
  }
};
