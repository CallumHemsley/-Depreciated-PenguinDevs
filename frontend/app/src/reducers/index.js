import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import * as types from '../actions/types';
import {postsReducer, postReducer} from './postReducers';

const filter = (state = '', action) => {
  switch(action.type) {
    case types.FILTER:
      return action.filter;
    default:
      return state;
  }
};
//Reducers aren't independent.
//Must be put together as one then passed to store so use combine reducers to do so.
const rootReducer = combineReducers({
  posts: postsReducer,
  post: postReducer,
  filter,
  routing
});

export default rootReducer;