import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';


const Header = (props) => {
  return (
    <Text className="headerComponent" style={style.text}>
      Header
    </Text>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 50,
  },
});

export default Header;
