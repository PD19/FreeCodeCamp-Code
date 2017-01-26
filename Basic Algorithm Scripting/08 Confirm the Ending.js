/* Bonfire: Confirm the Ending

Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

Do not use the built-in method .endsWith() to solve the challenge.

Here are some helpful links:
[String.prototype.substr()] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr)
[String.prototype.substring()] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)

Coded by Paul Dawkins
https://twitter.com/Paul__Dawkins
https://www.freecodecamp.com/pd19
*/

//Starter Code
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str;
}

confirmEnding("Bastian", "n");

//Solution
function confirmEnding(str, target) {
  if (str.substr((str.length - target.length), (str.length)) == target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");
