import { RSAA } from 'redux-api-middleware';

export const HELLOWORLD_REQUEST = 'HELLOWORLD_REQUEST';
export const HELLOWORLD_SUCCESS = 'HELLOWORLD_SUCCESS';
export const HELLOWORLD_FAILURE = 'HELLOWORLD_FAILURE';

export const getHelloWorld = () => {
  const endpoint =
    'https://raw.githubusercontent.com/itsbysean/json-fake-server/rest/helloworld.json';
  return {
    [RSAA]: {
      endpoint: endpoint,
      method: 'GET',
      types: [
        HELLOWORLD_REQUEST,
        {
          type: HELLOWORLD_SUCCESS,
          payload: (action, state, res) => res.json()
        },
        HELLOWORLD_FAILURE
      ]
    }
  };
};
