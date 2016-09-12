import React, {
  PropTypes,
} from 'react';

import {
  Dimensions,
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  Font,
} from 'exponent';

import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';

import {
  createNewGameAsync,
} from '../Game';

let {height, width} = Dimensions.get('window');
import Store from '../state/Store';


class Outcome extends React.Component {
  _onPress() {
    console.log("Outcome pressed");
    createNewGameAsync(Store.dispatch);
  }

  render() {
    return (
      <TouchableBounce style={{zIndex: 200,}} onPress={this._onPress}>
        <View style={{
          position: 'absolute',
          width: width,
          justifyContent: 'center',
          alignItems: 'center',
          top: 180,
          left: 0,
          // backgroundColor: 'blue',
        }}>
          <View style={{
            backgroundColor: this.props.backgroundColor,
            borderRadius: 30,
            width: 300,
            transform: [{rotate: '-40deg'}],
            height: 170,
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 15,
          }}>
            <Text style={[{
              color: 'white',
              fontSize: 80,
              fontWeight: 'bold',
            },
            Font.style('TopSecret'),
            ]}>{this.props.result.toUpperCase()}</Text>
            <Text style={[{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
            },
            Font.style('space-mono'),
          ]}>{this.props.word}</Text>
        </View>
      </View>
    </TouchableBounce>
    );
  }
}

export class Win extends React.Component {
  render() {
    return (
      <Outcome {...this.props} result="win" word={this.props.word} backgroundColor="#44db5e" />
    );
  }
}

export class Lose extends React.Component {
  render() {
    return (
      <Outcome {...this.props} result="lose" word={this.props.word} backgroundColor="#ff2851" />
    );
  }
}
