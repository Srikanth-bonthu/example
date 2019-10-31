import { combineReducers } from 'redux'
import reducer_1 from './reducer_1';
import reducer_2 from './reducer_2';

const x = combineReducers({
  activeBook: reducer_1,
  books: reducer_2
});
export default x;