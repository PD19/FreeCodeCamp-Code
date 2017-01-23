/* Bonfire: Find the Longest Word in a String

Return the length of the longest word in the provided sentence. Your response should be a number.

Here are some helpful links: 
[String.prototype.split()] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
[String.length] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)

Coded by Paul Dawkins
https://twitter.com/Paul__Dawkins
https://www.freecodecamp.com/pd19
*/

function findLongestWord(str) {
  var string = str.split(" ");  //Create a variable, and input the split contents of str
  var longest = 0;
  var word = null;
  for (var i = 0; i < string.length; i++) {
    if (longest < string[i].length) {
      longest = string[i].length;
      word = string[i];
    }
  }
  return longest;
}


findLongestWord("The quick brown fox jumped over the lazy dog");
