<<<<<<< HEAD
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
=======
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
>>>>>>> 026266a7a3ed3fc094840c88a8e82bfcb55ecb02
    );
  }
}

<<<<<<< HEAD
export default App;
=======
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
>>>>>>> 026266a7a3ed3fc094840c88a8e82bfcb55ecb02
