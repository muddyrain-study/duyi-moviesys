import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { IRootState, rootReducer } from './reducers/rootReducer';
import logger from 'redux-logger';
import thunk, { ThunkMiddleware } from 'redux-thunk';

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<IRootState>, logger)
);
