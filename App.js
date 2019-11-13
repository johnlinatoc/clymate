import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  SectionList,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import LinearGradient from 'react-native-linear-gradient';

const API_KEY = '97813b71a5e09aec0884363b28718e5c';
const city = 'chicago';

// http://api.openweathermap.org/data/2.5/weather?q=chicago&appid=97813b71a5e09aec0884363b28718e5c
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: ''
    };
  }

  componentDidMount() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`,
    )
      .then(resp => resp.json())
      .then(data => this.setState({data}))
      .catch(err => console.log(err));
  }

  renderWeatherInfo() {
    const {data} = this.state;
    return (
      <>
        <Text style={styles.text}>City: Chicago</Text>
        <Text style={styles.text}>
          Current Temp: {Math.round(data.main.temp)}˚ degrees
        </Text>
        <Text style={styles.text}>
          Max Temp: {Math.round(data.main.temp_max)}˚ degrees
        </Text>
        <Text style={styles.text}>
          Min Temp: {Math.round(data.main.temp_min)}˚ degrees
        </Text>
        <Text style={styles.text}>{data.weather[0].description}</Text>
      </>
    );
  }

onChangeText(text) {
  this.setState({
    value: text
  })
}

  render() {
    const {data} = this.state;
    {
      data.weather ? console.log(data, data.weather[0]) : null;
    }

    if (data.weather) {
      return (
        <LinearGradient
          colors={['#4c669f', '#192f6a']}
          style={styles.linearGradient}>
          <SafeAreaView style={styles.container}>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}
              onChangeText={text => this.onChangeText(text)}
              value={this.state.value}
            }
            />
            {this.renderWeatherInfo()}
          </SafeAreaView>
        </LinearGradient>
      );
    }

    return (
      <LinearGradient
        colors={['#4c669f', '#192f6a']}
        style={styles.linearGradient}>
        <SafeAreaView style={styles.container}>
          <Text>Loading</Text>
        </SafeAreaView>
      </LinearGradient>
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
    borderBottomColor: '#eee',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
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
