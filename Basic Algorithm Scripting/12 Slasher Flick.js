/* Bonfire: Slasher Flick.js

Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.

Here are some helpful links:
Array.prototype.slice()   
Array.prototype.splice()   

Coded by Paul Dawkins
https://twitter.com/Paul__Dawkins
https://www.freecodecamp.com/pd19
*/

//Starter Code
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr;
}

slasher([1, 2, 3], 2);

//Solution
function slasher(arr, howMany) {
  if(arr.length > howMany) { //If the length of the array is larger than howMany
    arr = arr.splice(howMany); //Splice the array by the value of howMany
  } else {
    arr = []; //If not, array becomes an empty array
  }
  return arr;
}

slasher([1, 2, 3], 2);
