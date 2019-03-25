export const postAuthMiddleware = store => next => action => {
  console.log(action);
  return next(action);
};
