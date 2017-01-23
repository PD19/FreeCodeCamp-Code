/* Bonfire: Factorialize a Number

Return the factorial of the provided integer. 
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n. 
Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Here are some helpful links:
[Arithmetic Operators] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)

Coded by Paul Dawkins
https://twitter.com/Paul__Dawkins
https://www.freecodecamp.com/pd19
*/

//Starter Code
function factorialize(num) {
  return num;
  }
factorialize(5)
//We see that the number whose factorial is to be found is stored in the variable "num"

function factorialize(num) {
  //If num is equal to 0 or 1
  if (num === 0 || num === 1) {
    return 1;
  }
  //Otherwise, return num multiplied by the factorialized value of num, minus 1
  return num * factorialize(num-1);
}

factorialize(5);
