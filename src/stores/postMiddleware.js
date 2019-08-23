export const postMiddleware = store => next => action => {
  console.log(action);
  return next(action);
};
