export const HELLOWORLD = 'HELLOWORLD';

export const getHelloWorld = () => {
  return { type: HELLOWORLD, payload: 'hello world!!!' };
};
