/* Bonfire: Title Case a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Here are some helpful links:
[String.prototype.split()] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

Coded by Paul Dawkins
https://twitter.com/Paul__Dawkins
https://www.freecodecamp.com/pd19
*/

//Starter Code
function titleCase(str) {
  return str;
}
titleCase("I'm a little tea pot");

//Solution
function titleCase(str) {
  var string = str.split(" "); //Splits the string after every space
  var array = []; //Creates an array and stores it inside a variable
  
  for (var i = 0; i < string.length; i++) { //Creates  loop and scrolls through it
    var firstLetter = string[i].charAt(0).toUpperCase(); //Makes first letter of each word uppercase
    var remainderOfWord = string[i].slice(1); //Slices off remainder of  word after the first letter
    var modifiedWord = remainderOfWord.toLowerCase(); //Turns sliced off remainder lowercase
    array[i] = firstLetter + modifiedWord; //Stores capitalized letter and the lowercase part of the word into the array
  }
  return array.join(" "); //Joins the array (previously a string) back together again
}

titleCase("I'm a little tea pot");
