import React, {
  PropTypes,
} from 'react';

import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Exponent from 'exponent';


export default class LetterTile extends React.Component {
  render() {

    let colors = ['#ffcc00', '#ddbb88', '#ccdd33'];
    let textColor = '#222211';
    let backgroundColor = 'white';

    if (!this.props.active) {
      colors = ['#666666', '#888888', '#777777']
      textColor = '#aaaaaa';
      backgroundColor = '#eeeeee';
    }

    return (
      <View style={{
          borderRadius: 3,
          borderColor: textColor,
          borderWidth: 1,
          height: 42,
          width: 30,
          justifyContent: 'center',
          padding: 3,
          alignItems: 'center',
          backgroundColor,
      }}>
        <Text style={{
            fontSize: 24,
            color: textColor,
            fontWeight: 'bold',
            backgroundColor: 'transparent',
        }}>{this.props.letter}</Text>
      </View>
    );

    return (
      <Exponent.Components.LinearGradient
        colors={colors}
        style={{
          padding: 3,
          alignItems: 'center',
          borderRadius: 3,
          justifyContent: 'center',
          height: 42,
          width: 30,
        }}>
        <Text style={{
          fontSize: 24,
          color: textColor,
          fontWeight: 'bold',
          backgroundColor: 'transparent',
        }}>{this.props.letter}</Text>
      </Exponent.Components.LinearGradient>
    );
  }
}
