import React from 'react';
import {
  Text,
} from 'react-native';
import {
  Font,
} from 'exponent';

export class MonoText extends React.Component {
  render() {
    return (
      <Text {...this.props} style={[this.props.style, Font.style('space-mono')]} />
    );
  }
}

export class HangmanText extends React.Component {
  render() {
    return (
      <Text {...this.props} style={[{letterSpacing: 3,}, this.props.style, Font.style('Appleberry')]} />
    );
  }
}
