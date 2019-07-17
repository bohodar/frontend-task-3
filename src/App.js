import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Postlist from './Components/Postlist'
import { PostPage } from './Components/PostPage'
import { loadPosts } from './helpers/loadPosts'
import { setPosts } from './Redux/Reducers/postsReducer'
import { Wrapper, GlobalStyle } from "./AppStyles";

class App extends React.Component {
  async componentDidMount() {
    const { setPosts } = this.props;
    const posts = await loadPosts();
    posts.length = 40;
    setPosts(posts);
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyle/>
          <Wrapper>
            <Switch>
              <Route exact path="/" component={Postlist}/>
              <Route path="/posts/post:postId/" component={PostPage}/>
            </Switch>
          </Wrapper>
      </React.Fragment>
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
