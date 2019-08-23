import { PUBLIC } from '../../common/symbol/authSymbol';
import { getAPI } from '../common/commonAction';

export const POST_FETCH_REQUEST = 'POST_FETCH_REQUEST';
export const POST_FETCH_SUCCESS = 'POST_FETCH_SUCCESS';
export const POST_FETCH_FAILURE = 'POST_FETCH_FAILURE';

export const fetchPosts = () => {
  const endpoint = 'https://jsonplaceholder.typicode.com/posts';

  const types = [
    POST_FETCH_REQUEST,
    {
      type: POST_FETCH_SUCCESS,
      payload: (action, state, res) => res.json()
    },
    POST_FETCH_FAILURE
  ];

  return {
    [PUBLIC]: getAPI({ endpoint, types })
  };
};
