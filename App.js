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
  ActivityIndicator,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import LinearGradient from 'react-native-linear-gradient';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      city: '',
      fiveDayForecast: []
    };
  }

  onCitySubmit(){
    const city = this.state.city;

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`,
    )
    .then(resp => resp.json())
    .then(data => this.setState({data}))
    .catch(err => console.log(err));

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=${API_KEY}`)
    .then(resp => resp.json())
    .then(data => this.setState({fiveDayForecast: data}))
    .catch(err => console.log(err));
  }

  renderWeatherInfo() {
    const {data, city} = this.state;
    return (
      <>
        <Text style={styles.text}>City: {city}</Text>
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

  renderFiveDayForecast(){
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    let unix_timestamp = this.state.fiveDayForecast.list[0].dt
    let date = new Date(unix_timestamp*1000);
    // Hours part from the timestamp
    let hours = date.getHours();
    // Minutes part from the timestamp
    let minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    let seconds = "0" + date.getSeconds();
    console.log(hours, minutes, seconds)
  }

onChangeTxt(text) {
  this.setState({
    city: text,
    data: []
  })
}

  render() {
    const {data, city, fiveDayForecast} = this.state;

    // {
    //   data.weather ? console.log(fiveDayForecast.list) : null;
    // }

    if (fiveDayForecast.list) {
      {this.renderFiveDayForecast()}
      console.log(fiveDayForecast.list[0].dt)
      return (
        <LinearGradient
          colors={['#4c669f', '#192f6a']}
          style={styles.linearGradient}>
          <SafeAreaView style={styles.container}>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 5, backgroundColor: 'white'}}
              onChangeText={text => this.onChangeTxt(text)}
              value={city}
              clearButtonMode={'while-editing'}
              returnKeyType={'search'}
              textContentType={'addressCity'}
              onSubmitEditing={text => this.onCitySubmit()}
            />
            {this.renderWeatherInfo()}
            <Image source={{uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}}
              style={{width: 100, height: 100}}/>
          </SafeAreaView>
        </LinearGradient>
      );
    }

    return (
      <LinearGradient
        colors={['#4c669f', '#192f6a']}
        style={styles.linearGradient}>
        <SafeAreaView style={styles.container}>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 5, backgroundColor: 'white'}}
        onChangeText={text => this.onChangeTxt(text)}
        value={city}
        clearButtonMode={'while-editing'}
        returnKeyType={'search'}
        textContentType={'addressCity'}
        onSubmitEditing={text => this.onCitySubmit()}
        />
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
