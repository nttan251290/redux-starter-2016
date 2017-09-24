import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootRedurcer = combineReducers({
  courses
});

export default rootRedurcer;