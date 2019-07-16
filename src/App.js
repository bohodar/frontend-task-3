import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Postlist from './Components/Postlist'
import { PostPage } from './Components/PostPage'
import { loadPosts } from './ApiHelper/loadPosts'
import { setPosts } from './Redux/Reducers/postsReducer'
import './AppStyles';

class App extends React.Component {
  async componentDidMount() {
    const { setPosts } = this.props;
    const posts = await loadPosts();
    setPosts(posts);
  }

  render() {
    return (
      <div className="PostApp">
        <Switch>
          <Route exact path="/" component={Postlist}/>
          <Route path="/posts/post:postId/" component={PostPage} />
        </Switch>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    posts: state.posts
  }
};

const mapDispatch = { setPosts };

export default connect(mapState, mapDispatch)(App);
