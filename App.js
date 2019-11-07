import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  SectionList,
} from 'react-native';


import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import LinearGradient from 'react-native-linear-gradient';

const API_KEY = ''

// {
//   "id": 3582383,
//   "name": "Chicago",
//   "country": "BZ",
//   "coord": {
//     "lon": -88.300003,
//     "lat": 17.799999
//   }

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      data: [],
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp => resp.json())
    .then(data => this.setState({ data }))
    .catch(err => console.log(err))
  }

  renderTitles(){
    const { data } = this.state;
    return data.map(entry => <Text  style={styles.text}> Title: { entry.title[0].toUpperCase() + entry.title.slice(1) + '.' } </Text>)
  }


  render(){
    const { data } = this.state;
    console.log(data)
    console.log(`${process.env.REACT_APP_API_KEY}`)

    return (
      <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
        <Text style={styles.buttonText}>
          Sign in with Facebook
        </Text>
      </LinearGradient>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    alignSelf: 'stretch',
    margin: 10,
    fontSize: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  linearGradient: {
  flex: 1,
  paddingLeft: 15,
  paddingRight: 15,
  borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default App;
