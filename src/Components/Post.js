import React, { useState } from 'react'
import { connect } from "react-redux";
import { addComment } from '../Redux/Reducers/postsReducer'
import { PostWrap, CommentWrap, Time } from "../AppStyles";
import getTime from '../helpers/getTime'

const randomStr = require('randomstring');

function Post({ posts, id, addComment}) {
  const [userText, changeUserText] = useState('');

  function handleInput(e){
    changeUserText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addComment(userText, id, getTime());
    changeUserText('');
  }
  function generateComments(comments){
    return comments.map(item => (
      <CommentWrap key={randomStr.generate(3)}>
        <b>Comment from <i>Your Name</i>: </b>
        <code>{item.body}</code>
        <Time>{item.time}</Time>
      </CommentWrap>
    ))
  }

  return posts.map(post => {
    if (post.id !== id) return null;
    return (
      <PostWrap key={post.id}>
        <h3>{post.email}</h3>
        <q>{post.body}</q>
        {post.comments ?
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
      </PostWrap>
    )
  })
}

const mapState = (state) => {
  return {
    posts: state.posts
  }
};

const mapDispatch = { addComment };

export default connect(mapState, mapDispatch)(Post);
