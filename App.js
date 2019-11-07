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

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp => resp.json())
    .then(data => this.setState({ data }))
  }

  renderTitles(){
    const { data } = this.state;

    return data.map(entry => <Text> { entry.title }</Text>)
  }


  render(){
    const DATA = this.state.data;
    return (
      <ScrollView style={styles.container}>
        <SectionList
          sections={DATA}
          renderItem={({ item }) => return (
            <View>
              <Text> { item.title }</Text>
            </View>)
          }
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default App;
