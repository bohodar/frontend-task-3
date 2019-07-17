const SET_POSTS = 'SET_POSTS';
const ADD_COMMENT = 'ADD_COMMENT';

export const setPosts = (posts) => {
  return {
    type: SET_POSTS,
    posts: posts
  }
};

export const addComment = (text, postID, time) => {
  return {
    type: ADD_COMMENT,
    text: text,
    id: postID,
    time: time
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
          const newComment = {
            body: action.text,
            time: action.time
          };

          return {
            ...post,
            comments: [...comments, newComment]
          }
        }
        return post;
      });

    default:
      return state;
  }
};
