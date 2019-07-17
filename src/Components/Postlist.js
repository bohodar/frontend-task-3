import React from 'react';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
import { ListOuterWrapper, PostsWrapper, ListItemWrapper } from '../AppStyles'

const Postlist = ({ posts }) => {
  return (
    <ListOuterWrapper>
      <h2>Postspage</h2>
      {posts.length > 0 ?
        <PostsWrapper>{generatePosts(posts)}</PostsWrapper> :
        <div>Loading posts ...</div>}
    </ListOuterWrapper>
  )
};

const generatePosts = (posts) => {
  return posts.map(post => (
    <ListItemWrapper key={post.id}>
      <Link to={`/posts/post:${post.id}`}>
          <b>{post.email}</b><br/>
          <code>{post.name}</code>
      </Link>
    </ListItemWrapper>
  ))
};

const mapState = (state) => {
  return {
    posts: state.posts
  }
};
export default connect(mapState)(Postlist);
