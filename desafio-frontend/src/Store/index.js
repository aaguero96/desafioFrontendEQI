import { createStore } from 'redux';
import myReducers from '../Reducers/index';

const store = createStore(
  myReducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
