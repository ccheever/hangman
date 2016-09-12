import ActionTypes from './ActionTypes';

export function guessLetter(letter) {
  return {
    type: ActionTypes.GUESS_LETTER,
    letter,
  };
}

export function newGame(word) {
  return {
    type: ActionTypes.NEW_GAME,
    word,
  };
}
