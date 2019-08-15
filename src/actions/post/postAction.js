import { RSAA } from 'redux-api-middleware';
import { PUBLIC } from '../../common/symbol/authSymbol';

export const POST_FETCH_REQUEST = 'POST_FETCH_REQUEST';
export const POST_FETCH_SUCCESS = 'POST_FETCH_SUCCESS';
export const POST_FETCH_FAILURE = 'POST_FETCH_FAILURE';

export const fetchPosts = () => {
  const endpoint = 'https://jsonplaceholder.typicode.com/posts';
  return {
    [PUBLIC]: {
      [RSAA]: {
        endpoint: endpoint,
        method: 'GET',
        types: [
          POST_FETCH_REQUEST,
          {
            type: POST_FETCH_SUCCESS,
            payload: (action, state, res) => res.json()
          },
          POST_FETCH_FAILURE
        ]
      }
    }
  };
};
