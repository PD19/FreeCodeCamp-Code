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

function palindrome(str) {
  // make all of the letters lowercase and remove non-alphanumeric characters
  str = str.toLowerCase();
  str = str.replace(/[^a-z|1-9]/g, "");
  
  // if the length of the string is 0, then it is a palindrome
  if (str.length === 0) {
    return true;
  }
  // if the first letter and the last letter of the string do not equal eachother, then it is not a palindrome
  if (str[0] !== str[str.length-1]) {
    return false;
  } else {
    //Else, run the function without the first and last characters
    return palindrome(str.slice(1,str.length - 1));
  }
}


palindrome("eye");
palindrome("racecar");
palindrome("giraffe"); //This is not a palindrome, and will return false.
 
