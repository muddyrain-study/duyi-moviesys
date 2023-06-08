import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import logger from 'redux-logger';

export const store = createStore(rootReducer, applyMiddleware(logger));
