import * as ActionCreators from './state/ActionCreators';
import Store from './state/Store';
import * as Words from './Words';

export async function createNewGameAsync() {
  let word = await Words.randomWordAsync();
  return Store.dispatch(ActionCreators.newGame(word));
}

export function wordContainsLetter(word, letter) {
  return word.includes(letter);
}

export function allLettersGuessed(word, guessedLetterSet) {
  for (let i = 0; i < word.length; i++) {
    let c = word.substr(i, 1);
    if (!guessedLetterSet[c]) {
      return false;
    }
  }
  return true;
}
