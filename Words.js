
import diacritics from 'diacritics';

export async function getTrendsAsync() {
  let response = await fetch("https://tonicdev.io/ccheever/57c7f03b8d4e5c1600153b68/branches/master");
  try {
    let trends = await response.json();
    return trends;
  } catch (e) {
    throw new Error("Could not get trends from API. " + e);
  }
}

function randomChoice(arr) {
  return arr[Math.floor(arr.length * Math.random())];
}

export async function randomWordAsync() {
  // console.log("randomWordAsync called");
  let trends = await getTrendsAsync();
  let word = randomChoice(trends);
  word = diacritics.remove(word);
  word = word.toUpperCase();
  return word;
}

export function wordForDisplay(word, guessedLetterSet) {
  if (!word) {
    return word;
  }
  let dw = '' ;
  for (let i = 0; i < word.length; i++) {
    let c = word.substr(i, 1).toUpperCase();
    if (c.match(/\s/)) {
      dw += ' ';
    } else if (guessedLetterSet[c]) {
      dw += c;
    } else {
      dw += '_';
    }
  }
  return dw;
}
