import * as ActionCreators from './state/ActionCreators';
import Store from './state/Store';
import * as Words from './Words';

export async function createNewGameAsync(dispatch) {
  dispatch(ActionCreators.clearGame());
  let word = await Words.randomWordAsync();
  return dispatch(ActionCreators.newGame(word));
}

export function wordContainsLetter(word, letter) {
  return word.includes(letter);
}

export function allLettersGuessed(word, guessedLetterSet) {
  // console.log("allLettersGuessed('" + word + "', " + JSON.stringify(guessedLetterSet) + ")");
  for (let i = 0; i < word.length; i++) {
    let c = word.substr(i, 1);
    if (!/[A-Z0-9]/.test(c)) {
      continue;
    }
    // console.log("Checking for letter: '" + c + "'");
    if (!guessedLetterSet[c]) {
      // console.log("Missing letter: '" + c + "'");
      return false;
    }
  }
  return true;
}
