/* Bonfire: Repeat a string repeat a string

Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

Here are some helpful links:
[Global String Object] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

Coded by Paul Dawkins
https://twitter.com/Paul__Dawkins
https://www.freecodecamp.com/pd19
*/

//Starter Code
function repeatStringNumTimes(str, num) {
  // repeat after me
  return str;
}

repeatStringNumTimes("abc", 3);

//Solution
function repeatStringNumTimes(str, num) {
  if (num > 0) { //If the num parameter is greater than 0
    return str.repeat(num); //Return the repeated string
  } else {
    return ""; //Return an empty string
  }
  return str;
}

repeatStringNumTimes("abc", 3);
