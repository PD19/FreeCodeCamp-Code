/* Bonfire: Return Largest Numbers in Arrays

Return an array consisting of the largest number from each provided sub-array. 

For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Here are some helpful links:
[Comparison Operators] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

*/

//Starter Code
function largestOfFour(arr) {
  return arr;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//Solution
function largestOfFour(arr) {
  //Create an empty array
  var largest = [];
  arr.forEach(function(array) {
    // Sort each individual array in descending order, then return the 0 index (highest element)
    largest.push(array.sort(function(a, b) {return b - a;})[0]);
  });
  return largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
