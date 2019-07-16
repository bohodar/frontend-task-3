import React from 'react';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom'

const Postlist = ({ posts }) => {
  return (
    <div>
      <h3>Postspage</h3>
      {posts.length > 0 ?
        <ul>{generatePosts(posts)}</ul> :
        <div>Loading posts ...</div>}
    </div>
  )
};

const generatePosts = (posts) => {
  return posts.map(post => (
    <Link
      key={post.id}
      to={{
        pathname: `/posts/post:${post.id}`,
        postId: post.id,
      }}
    >
      <li>{post.name}</li>
    </Link>
  ))
};

const mapState = (state) => {
  return {
    posts: state.posts
  }
};
export default connect(mapState)(Postlist);
