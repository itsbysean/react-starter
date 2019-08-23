export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';

export const login = (username, password) => {
  // fake action
  if (username === 'admin' && password === 'admin') {
    return {
      type: LOGIN_SUCCESS,
      payload: { token: '32fdf135-72b3-4145-8292-069f5c376349' }
    };
  } else {
    return {
      type: LOGIN_FAILURE
    };
  }
};

export const logout = () => {
  return {
    type: LOGOUT_REQUEST
  };
};
