import { createStore } from 'redux';
import rootReducer from '../reducers/rootreducers';

export const store = createStore(
    rootReducer, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
