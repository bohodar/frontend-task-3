import { createStore, combineReducers } from 'redux';
import { setPostsReducer } from './Reducers/postsReducer'

const reducer = combineReducers({
  posts: setPostsReducer,
});

export const store = createStore(reducer);
