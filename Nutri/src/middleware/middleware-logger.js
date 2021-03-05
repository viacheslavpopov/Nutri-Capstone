const middlewareLogger = store => next => action => {
  console.log('Original State:', store.getState());
  console.log('Current Action:', action);
  next(action);
  console.log('New Updated Store:', store.getState());
};

export default middlewareLogger;