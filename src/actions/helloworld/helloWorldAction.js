export const HELLOWORLD_SUCCESS = 'HELLOWORLD_SUCCESS';

export const getHelloWorld = () => {
  return {
    type: HELLOWORLD_SUCCESS,
    payload: { data: 'Hello World!' }
  };
};
