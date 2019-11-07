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



class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      data: [],
    }
  }

  // API-KEY:
  // ZIP-CODE KEY: 26481_PC
  //auto complete: GET /locations/v1/cities/autocomplete?apikey=rryg7NRLGy7oOhWLVHIWfOQG0ZytEtrE&q=chicag
  componentDidMount(){
    // 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=(insert api key)&q=chicag'
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
        <ScrollView>
          {this.renderTitles()}
        </ScrollView>

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
});

export default App;
