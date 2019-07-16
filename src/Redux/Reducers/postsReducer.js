const SET_POSTS = 'SET_POSTS';

export const setPosts = (posts) => {
  return {
    type: SET_POSTS,
    posts: posts
  }
};

export const setPostsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_POSTS:
      return action.posts;

    default:
      return state;
  }
};