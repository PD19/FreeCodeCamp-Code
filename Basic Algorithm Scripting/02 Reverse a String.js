/* Bonfire: Reverse a String
Difficulty: 1/5

Reverse the provided string. You may need to turn the string into an array before you can reverse it. Your result must be a string. Remember to use RSAP if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:

Global String Object String.split() Array.reverse() Array.join()

Coded by Paul Dawkins
dawkins.paul@hotmail.com
https://www.freecodecamp.com/pd19

*/

function reverseString(str) {
  //Split the values within the converted array, reverse them, then join them together again
  return str.split('').reverse().join('');
}

reverseString('hello');
