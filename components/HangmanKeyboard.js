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

import LetterTile from './LetterTile';

export default class HangmanKeyboard extends React.Component {

  _renderRow(letters) {

    let tiles = [];
    for (let i = 0; i < letters.length; i++) {
      let active = true;
      let letter = letters[i];
      if (this.props.guessedLetterSet[letter.toUpperCase()]) {
        active = false;
      }
      tiles.push(<LetterTile letter={letter} key={letter} active={active} />);
    }

    return (
      <View style={{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        padding: 6,
      }}>
        {tiles}
      </View>
    );
  }

  render() {
    return (
      <View style={{
        flexDirection: 'column',
      }}>
        {this._renderRow('0123456789')}
        {this._renderRow('QWERTYUIOP')}
        {this._renderRow('ASDFGHJKL')}
        {this._renderRow('ZXCVBNM')}
      </View>
    );
  }
}
