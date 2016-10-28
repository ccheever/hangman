import { combineReducers } from 'redux';

import * as ActionCreators from './ActionCreators';
import ActionTypes from './ActionTypes';
import * as Game from '../Game';

let initialState = {
  guessedLetterSet: {},
  word: null,
  strikes: 0,
  gameState: 'NOT_YET_STARTED',
  lettersPlayed: 0,
};

let app = (state=initialState, action) => {
  console.log("Reducing action of type '" + action.type + "' with data: " + JSON.stringify(action));
  switch (action.type) {
    case ActionTypes.GUESS_LETTER:
      let lettersPlayed = state.lettersPlayed;

      if (state.gameState !== 'IN_PROGRESS') {
        // TODO: Maybe surface an error?
        console.log("not in progress");
        return {
          ...state
        };
      }

      let letter = action.letter;
      let strikes = state.strikes;
      let guessedLetterSet = state.guessedLetterSet;
      let word = state.word;

      if (guessedLetterSet[letter]) {
        console.log("Already played that letter");
        return {
          ...state,
        };
      }

      guessedLetterSet[letter] = true;
      lettersPlayed += 1;

      if (Game.wordContainsLetter(word, letter)) {
        // Check for a win
        console.log("word '" + word + "' contains letter '" + letter + "'");
        if (Game.allLettersGuessed(word, guessedLetterSet)) {
          // Win
          console.log("win!");
          return {
            ...state,
            guessedLetterSet,
            gameState: 'WIN',
            lettersPlayed,
          };
        }
      } else {
        strikes++;
        if (strikes >= 6) {
          // Lose
          return {
            ...state,
            strikes,
            guessedLetterSet,
            gameState: 'LOSE',
            lettersPlayed,
          };
        }
      }

      // Game continues
      console.log("Game continues...");
      return {
        ...state,
        strikes,
        guessedLetterSet,
        lettersPlayed,
      };

      break;

    case ActionTypes.NEW_GAME:
      return {
        guessedLetterSet: {},
        word: action.word,
        strikes: 0,
        gameState: 'IN_PROGRESS',
        lettersPlayed,
      };

    case ActionTypes.CLEAR_GAME:
      return initialState;
      break;

    default:
      return {
        ...state
      };
      break;
  }

};
export default app;
