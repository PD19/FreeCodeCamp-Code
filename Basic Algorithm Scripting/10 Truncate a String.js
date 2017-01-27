/* Bonfire: Truncate a String

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 

Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add 
to the string length in determining the truncated string.

Here are some helpful links:
[String.prototype.slice()] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

Coded by Paul Dawkins
https://twitter.com/Paul__Dawkins
https://www.freecodecamp.com/pd19
*/

//Starter Code
function truncateString(str, num) {
  // Clear out that junk in your trunk
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

//Solution
function truncateString(str, num) {
  //If the length of str is less than or equal to the value of num
  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num > 3 ? num - 3 : num) + '...';
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
