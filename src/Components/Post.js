import React from 'react'
import {connect} from "react-redux";

const Post = ({ posts, id}) => {
  return posts.map(post => {
    if (post.id !== id) return null;
    return (
      <div key={post.id}>
        <h3>{post.name}</h3>
        <p>{post.body}</p>
      </div>
    )
  })
};

const mapState = (state) => {
  return {
    posts: state.posts
  }
};

export default connect(mapState)(Post);
