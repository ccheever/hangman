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

import {
  HangmanText,
  MonoText,
} from '../components/StyledText';

import HangmanDrawing from '../components/HangmanDrawing';
import HangmanKeyboard from '../components/HangmanKeyboard';

import {
  randomWordAsync,
  wordForDisplay,
} from '../Words';

const WOF_DEFAULT_GUESSES = {R: true, S: true, T: true, L: true, N: true, E: true,};

class HangmanWordComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      word: null,
    };
  }

  async setWordAsync() {
    // console.log("setWordAsync called");
    let word = await randomWordAsync();
    this.setState({
      word,
    });
  }

  componentDidMount() {
    // console.log("component did mount");
    this.setWordAsync();
  }

  render() {
    return (
      <View>
        <HangmanText style={{
            color: 'black',
            fontSize: 40,
          }}>{wordForDisplay(this.state.word, WOF_DEFAULT_GUESSES)}</HangmanText>
        <HangmanText style={{
          color: '#bbbbbb',
          fontSize: 32,
        }}>{this.state.word}</HangmanText>
      </View>
    );
  }
}


export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.contentContainer, {
            justifyContent: 'flex-start',
            flex: 1,
        }]}>
        {/* <ScrollView
           style={styles.container}
           contentContainerStyle={styles.contentContainer}> */}


          <View style={styles.welcomeContainer}>
            {/*
            <Text style={styles.welcomeText}>
              Welcome to
            </Text>

            <Image
              source={require('../assets/images/exponent-wordmark.png')}
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>
              Get started by opening
            </Text>

            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
            </View>

            <Text style={styles.getStartedText}>
              Change this text and your app will automatically reload.
            </Text>
            */}

            <HangmanWordComponent />
            <HangmanDrawing strikes="6" />
          </View>

          {/*
          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>
                Help, it didn’t automatically reload!
              </Text>
            </TouchableOpacity>
          </View>
          */}
        </View>
        {/*</ScrollView>*/}

        <HangmanKeyboard guessedLetterSet={WOF_DEFAULT_GUESSES} />

        {/*
        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>
            This is a tab bar. You can edit it in:
          </Text>

          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>navigation/RootNavigation.js</MonoText>
          </View>
        </View>
        */}
      </View>
    );
  }

  _handleHelpPress = () => {
    Linking.openURL('https://docs.getexponent.com/versions/v8.0.0/guides/up-and-running.html#can-t-see-your-changes');
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
  welcomeText: {
    fontSize: 19,
    color: 'rgba(96,100,109, 1)',
  },
  welcomeImage: {
    width: 200,
    height: 34.5,
    marginTop: 3,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 23,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {height: -3},
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
