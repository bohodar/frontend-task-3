import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Postlist from './Components/Postlist'
import { loadPosts } from './ApiHelper/loadPosts'
import { setPosts } from './Redux/Reducers/postsReducer'
import './AppStyles';

class App extends React.Component {
  async componentDidMount() {
    const { setPosts } = this.props;
    const posts = await loadPosts();
    console.log(posts)
    setPosts(posts);
  }

  render() {
    return (
      <div className="App">

        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/posts/" component={Postlist}/>
        </Switch>

      </div>
    );
  }
}

const HomePage = () => {
  return (
    <div>
      <h3>HomePage</h3>
      <Link to="/posts">Watch the latest posts</Link>
    </div>
  )
};

const mapState = (state) => {
  return {
    posts: state.posts
  }
};

const mapDispatch = { setPosts };

export default connect(mapState, mapDispatch)(App);
