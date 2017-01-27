/* Bonfire: Chunky Monkey.js

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a 
two-dimensional array.

Here are some helpful links:
[Array.prototype.push()] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
[Array.prototype.slice()] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

Coded by Paul Dawkins
https://twitter.com/Paul__Dawkins
https://www.freecodecamp.com/pd19
*/

//Starer Code
function chunkArrayInGroups(arr, size) {
  // Break it up.
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

//Solution
function chunkArrayInGroups(arr, size) {
  var newArray = [],
      x = 0,
      y = arr.length;
  
  while (x < y) {
  //Push the sliced array into equal groups based on the "size" value
    newArray.push(arr.slice(x, x += size));
  }
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
