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

import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';

import LetterTile from './LetterTile';

import * as ActionCreators from '../state/ActionCreators';
import Store from '../state/Store';

export default class HangmanKeyboard extends React.Component {

  _renderRow(letters) {

    let tiles = [];
    for (let i = 0; i < letters.length; i++) {
      let active = true;
      let letter = letters[i];
      if (this.props.guessedLetterSet[letter.toUpperCase()]) {
        active = false;
      }
      let tile;
      if (active) {
        tile = (
          <TouchableBounce key={letter} onPress={this._onPress(letter)}>
            <LetterTile letter={letter} key={letter} active={active} />
          </TouchableBounce>
        );
      } else {
        tile = (
          <LetterTile letter={letter} key={letter} active={active} />
        );
      }

      tiles.push(tile);
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

  _onPress(letter) {
    return () => {
      console.log("Pressed letter '" + letter + "'");
      this.props.dispatch(ActionCreators.guessLetter(letter));
    }
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
