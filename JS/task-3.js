function findLongestWord(string = '') {
  let words = string.split(' ');
  let longWord = words[0];

  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > longWord.length) {
      longWord = words[i];
    }
  }

  return longWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'
