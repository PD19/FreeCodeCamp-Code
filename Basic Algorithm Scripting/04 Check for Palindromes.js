/* Bonfire: Check for Palindromes

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

Here are some helpful links:
[String.prototype.replace()] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
[String.prototype.toLowerCase()] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)

Coded by Paul Dawkins
dawkins.paul@hotmail.com
https://www.freecodecamp.com/pd19
*/

//Starter Code
function palindrome(str) {
  //Good luck!
  return true;
}

funtion palindrome(str) {
  //This ensures str removes all letter characters and converts everything into lower case
  str = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
  //This creates a reverse string variable, splits the input, reverses it, then joins it together
  var revStr = str.split('').reverse().join('');
  //if str is identical to revStr, return true. Otherwise, its not a palindrome, so return false
  if(str === revStr){
    return true;
   } else {
    return false;
   }
}

palindrome("eye");
palindrome("racecar");
palindrome("giraffe"); //This is not a palindrome, and will return false.
 