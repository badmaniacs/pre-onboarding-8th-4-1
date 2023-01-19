import { combineReducers } from 'redux';
import { comments, editComment } from './reducer';

const rootReducer = combineReducers({ comments, editComment });

export default rootReducer;
