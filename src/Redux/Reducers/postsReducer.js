const SET_POSTS = 'SET_POSTS';
const ADD_COMMENT = 'ADD_COMMENT';

export const setPosts = (posts) => {
  return {
    type: SET_POSTS,
    posts: posts
  }
};

export const addCommentToPost = (text, postID) => {
  console.log('init comms');
  return {
    type: ADD_COMMENT,
    text: text,
    id: postID
  }
};

export const setPostsReducer = (state = [], action) => {
  console.log(action.type);
  switch (action.type) {
    case SET_POSTS:
      return action.posts;

    case ADD_COMMENT:
      console.log('adding comms');
      const copy = [...state];
      copy.map(post => {

        if (post.id === action.id) {
          const copyPost = {...post};

          if (copyPost['comments']) {
            const copyCommets = [...copyPost.comments].push(action.text);
            return {
              ...copyPost,
              comments: copyCommets
            }
          } else {
            return {
              ...copyPost,
              comments: [action.text]
            }
          }
        }
        return post;
      });
      return copy;

    default:
      return state;
  }
};
