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

import { connect } from 'react-redux';

import {
  HangmanText,
  MonoText,
} from '../components/StyledText';

import HangmanDrawing from '../components/HangmanDrawing';
import HangmanKeyboard from '../components/HangmanKeyboard';

import {
  Win,
  Lose,
} from '../components/Result';

import {
  randomWordAsync,
  wordForDisplay,
} from '../Words';

import Store from '../state/Store';

const WOF_DEFAULT_GUESSES = {R: true, S: true, T: true, L: true, N: true, E: true,};

class HangmanWordComponent extends React.Component {

  render() {
    let word = this.props.word || '';
    console.log("HangmanWordComponent rendering for '" + word + "'");
    return (
      <View style={{
          paddingHorizontal: 20,
      }}>
        {(this.props.gameState === 'LOSE') && (
          <HangmanText style={{
              color: '#aaaaaa',
              fontSize: 40,
            }}>{word}</HangmanText>
        ) || (
          <HangmanText style={{
              color: 'black',
              fontSize: 40,
            }}>{wordForDisplay(word, this.props.guessedLetterSet)}</HangmanText>
        )}
      </View>
    );
  }
}


@connect(
  (state, ownProps) => {
     return {
       ...ownProps,
       ...state,
     };
  },
  (dispatch, ownProps) => {
    return {
      dispatch,
      ...ownProps,
    }
  }
)
export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  }

  render() {
    console.log("HomeScreen props=" + JSON.stringify(this.props));
    console.log("HomeScreen state=" + JSON.stringify(this.state));
    return (
      <View style={styles.container}>
        <View style={[styles.contentContainer, {
            justifyContent: 'flex-start',
            flex: 1,
        }]}>


          <View style={styles.welcomeContainer}>

            {(this.props.gameState === 'NOT_YET_STARTED') && (
              <Text style={{
                  color: '#999999',
                  fontSize: 20,
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
              }}>Loading a trending phrase for you to guess...</Text>
            )}
            <HangmanWordComponent word={this.props.word} gameState={this.props.gameState} guessedLetterSet={this.props.guessedLetterSet} />
            <HangmanDrawing strikes={this.props.strikes} />
          </View>

        </View>

        <HangmanKeyboard guessedLetterSet={this.props.guessedLetterSet} dispatch={this.props.dispatch} />

        {(this.props.gameState === 'WIN') && (<Win word={this.props.word} />)}
        {(this.props.gameState === 'LOSE') && (<Lose word={this.props.word} />)}


      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 80,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
});
