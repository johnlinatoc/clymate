import React from 'react';
import { TextInput } from 'react-native';

// import styles from './styles.js'

export const GenericTextInput = (props) => {
  console.log('props', props)

  return (
    <TextInput
      style={{  height: 40,
        borderColor: 'gray',
        borderWidth: 5,
        backgroundColor: 'white'
      }}
      clearButtonMode={'while-editing'}
      returnKeyType={'search'}
      textContentType={'addressCity'}
      onChangeText={text => props.onChangeText(text)}
      onSubmitEditing={text => props.onCitySubmit()}
    />
  )
}
