import querystring from 'querystring';
import { RSAA } from 'redux-api-middleware';

export const SOMETHING_WENT_WRONG = 'SOMETHING_WENT_WRONG';

export const getAPI = ({ endpoint, types, params, headers }) => {
  return call({ endpoint, types, params, headers, method: 'get' });
};

// default request body is in json
export const postAPI = ({ endpoint, types, body, headers }) => {
  return call({ endpoint, types, body, headers, method: 'post' });
};

export const putAPI = ({ endpoint, types, body, headers }) => {
  return call({ endpoint, types, body, headers, method: 'put' });
};

export const deleteAPI = ({ endpoint, types, params, headers }) => {
  return call({ endpoint, types, params, headers, method: 'delete' });
};

const methods = ['get', 'post', 'put', 'delete'];

const call = ({ endpoint, types, params, headers, body, method }) => {
  if (
    endpoint &&
    Array.isArray(types) &&
    method &&
    methods.includes(method.toLowerCase())
  ) {
    if (params) {
      try {
        endpoint = endpoint + `?${querystring.stringify(params)}`;
      } catch (error) {
        console.log(error);
        return somethingWentWrong({
          message: 'failed to make querystring with ' + params
        });
      }
    }

    if (!['get', 'delete'].includes(method.toLowerCase()) && body) {
      try {
        body = JSON.stringify(body);
      } catch (error) {
        console.log(error);
        return somethingWentWrong({
          message: 'failed to serialize json with ' + body
        });
      }
    }

    return {
      [RSAA]: {
        endpoint,
        headers,
        method,
        body,
        types
      }
    };
  }

  return somethingWentWrong({
    message: 'failed to call api due to illegal arguments.'
  });
};

export const somethingWentWrong = error => {
  return {
    type: SOMETHING_WENT_WRONG,
    payload: {
      data: error
    }
  };
};
