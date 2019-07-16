import React from 'react';
import { Route } from 'react-router-dom'
import './AppStyles';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route axact path="/" component={MainList}/>
      </div>
    );
  }
}

const MainList = () => {
  return (
    <div>It's work!</div>
  )
};

export default App;
