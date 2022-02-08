import { combineReducers } from 'redux';
import { myReducer } from './myReducer';

const myReducers = combineReducers({ myReducer });

export default myReducers;