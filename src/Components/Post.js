import React, { useState } from 'react'
import {connect} from "react-redux";
import { addCommentToPost } from '../Redux/Reducers/postsReducer'

function Post({ posts, id}) {
  const [userText, changeUserText] = useState('');

  function handleInput(e){
    changeUserText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    console.log(addCommentToPost(userText, id));
    addCommentToPost(userText, id);
    changeUserText('');
  }
  function generateComments(comments){
    return comments.map(item => (<p>{item}</p>))
  }
  console.log('render post');
  return posts.map(post => {
    if (post.id !== id) return null;
    return (
      <div key={post.id}>
        <h3>{post.name}</h3>
        <p>{post.body}</p>
        {post['comments'] ?
          generateComments(post.comments) :
          null
        }
        <form onSubmit={onSubmit}>
          <input
            value={userText}
            placeholder="Add a comment"
            onChange={handleInput}
          />
        </form>
      </div>
    )
  })
}

const mapState = (state) => {
  return {
    posts: state.posts
  }
};

const mapDispatch = { addCommentToPost };

export default connect(mapState, mapDispatch)(Post);
