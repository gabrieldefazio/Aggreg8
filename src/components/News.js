// Currently, I'm not using this reducer, but I will when I add more functionality and allow the user to dynamically render news from a set of news options.

import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions,ScrollView, Image, Linking } from "react-native";
import { connect } from 'react-redux'
import {Actions} from 'react-native-router-flux'
import { GOOGLE_KEY } from '../../.env'
import axios from 'axios'

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bbcNews: []
    };
  }
  
  componentDidMount(){
    axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${GOOGLE_KEY}`)
      .then(res => res.data)
      .then(bbcNews => {
        this.setState({bbcNews})
      })
      .catch()
  }
  
  render() {
    const{ bbcNews } = this.state

    return (
      <ScrollView>
        {
          bbcNews.articles && bbcNews.articles.map(article => (
            <View key={article.publishedAt} style={styles.itemContainer}
                  onPress={()=> Linking.openURL(article.url)}>
              <Text style={styles.title}>{article.title}</Text>
              <Image
                style={styles.item}
                source={{uri: article.urlToImage}}
              />
            </View>
          ))
        }
      </ScrollView>
    );
  }
}

const numColumns = 1;
const size = Dimensions.get('window').width/numColumns;
const styles = StyleSheet.create({
  itemContainer: {
    width: size,
    height: size,
  },
  title:{
    lineHeight:25,
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
    textAlign: 'center',
    textShadowColor: 'white',
    includeFontPadding: true,
    fontFamily: 'Avenir'
  },
  item: {
    flex: 1,
    margin: 3,
    backgroundColor: 'lightblue',
    borderRadius: 4, borderWidth: 0.5, borderColor: '#d6d7da',
    
  }
});
