import { combineReducers } from "redux";
import { postsReducer } from './posts'
import { commentsReducer } from './comments'

export const reducers = combineReducers({ postsReducer, commentsReducer })