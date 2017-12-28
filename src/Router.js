import React, { Component } from 'react';
import { connect } from 'react-redux'
import { StyleSheet } from 'react-native';
import { Scene, Router, TabBar, Actions } from 'react-native-router-flux';
import { Icon, Title } from 'react-native-elements';

// SCENES ---------------------------
import News from './components/News';
import Search from './components/Search';


class RouterComponent extends Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    return (
      <Router style={styles.container}>
        <Scene
          key="root"
          navigationBarStyle={styles.navBar}
          nagivationTitleStyle={styles.navBar}
        >
          <Scene
            key="tabbar" tabs={true} showLabel={false} swipeEnabled={true} tabBarStyle={styles.tabContainer} activeBackgroundColor="#8FD7F0" >
            <Scene key="news" title="News"
                   icon={() => <Icon name="chrome-reader-mode" />}  component={News} />
            <Scene key="browser" title="Other News"
                   icon={() => <Icon name="favorite-border" />}  component={Search} />
            <Scene key="appointment" title="Find More News"
                   icon={() => <Icon name="search" />} component={Search} />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navBar: {
    backgroundColor: '#4b7a93',
    padding: 10
  },
  navTitle: {
    color: 'black'
  },
  tabContainer: {
    backgroundColor: '#4b7a93'
  }
})

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(RouterComponent)

