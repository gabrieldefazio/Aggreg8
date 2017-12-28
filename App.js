import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from './src/Router';
import { Spinner } from './src/scenes/Spinner';
import store, { fetchBBCNews } from './src/store'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }
  
  componentWillMount() {
    const bbcNewsThunk = fetchBBCNews();
    store.dispatch(bbcNewsThunk);
    this.setState({loaded:true})
  }
  
  render() {
    return (
      <Provider store={store}>
        {this.state.loaded ? <Router /> : <Spinner />}
      </Provider>
    );
  }
}

export default App;
