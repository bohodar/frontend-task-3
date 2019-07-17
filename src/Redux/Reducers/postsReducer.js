const SET_POSTS = 'SET_POSTS';
const ADD_COMMENT = 'ADD_COMMENT';

export const setPosts = (posts) => {
  return {
    type: SET_POSTS,
    posts: posts
  }
};

export const addComment = (text, postID) => {
  return {
    type: ADD_COMMENT,
    text: text,
    id: postID
  }
};

export const setPostsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_POSTS:
      return action.posts;

    case ADD_COMMENT:
      const copy = [...state];
      return copy.map(post => {

        if (post.id === action.id) {
          const { comments = [] } = post;

          return {
            ...post,
            comments: [...comments, action.text]
          }
        }
        return post;
      });

    default:
      return state;
  }
};
