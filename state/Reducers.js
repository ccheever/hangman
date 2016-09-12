import { combineReducers } from 'redux';

import * as ActionCreators from './ActionCreators';
import ActionTypes from './ActionTypes';
import * as Game from '../Game';

let initialState = {
  guessedLetterSet: {},
  word: null,
  strikes: 0,
  gameState: 'NOT_YET_STARTED',
};

let app = (state=initialState, action) => {
  console.log("Reducing action of type '" + action.type + "' with data: " + JSON.stringify(action));
  switch (action.type) {
    case ActionTypes.GUESS_LETTER:

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
      guessedLetterSet[letter] = true;
      if (Game.wordContainsLetter(state.word, letter)) {
        // Check for a win
        console.log("word '" + state.word + "' contains letter '" + letter + "'");
        if (Game.allLettersGuessed(word, guessedLetterSet)) {
          // Win
          console.log("win!");
          return {
            ...state,
            guessedLetterSet,
            gameState: 'WIN',
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
          };
        }
      }

      // Game continues
      console.log("Game continues...");
      return {
        ...state,
        strikes,
        guessedLetterSet,
      };

      break;

    case ActionTypes.NEW_GAME:
      return {
        guessedLetterSet: {},
        word: action.word,
        strikes: 0,
        gameState: 'IN_PROGRESS',
      };

    default:
      return {
        ...state
      };
      break;
  }

};
export default app;
