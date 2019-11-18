import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native'

const Header = (props) => {
  return(
    <SafeAreaView>
      <Text styles={{fontSize: 400}}>
        Header
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  }
})

export default Header
