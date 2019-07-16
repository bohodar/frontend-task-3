import React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom'

const Postlist = ({ posts }) => {
    return (
      <div>
        <h3>Postspage</h3>
        <ul>
          {posts.map(post => (<li key={post.id}>{post.title} - {post.body}</li>))}
        </ul>
        <Link to="/">Back to home</Link>
      </div>
    )
};
const mapState = (state) => {
  return {
    posts: state.posts
  }
};
export default connect(mapState)(Postlist);
