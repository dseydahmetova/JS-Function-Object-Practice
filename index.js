// 1. A function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.

function maxOfTwoNumbers(num1, num2) {
  num1 > num2 ? console.log(num1) : console.log(num2)
}
console.log("The largest of two numbers is:");
maxOfTwoNumbers(96, 9);

// 2. A function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. 

const maxOfThree = function(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(num1);
  } else if (num2 > num1 && num2 > num3) {
    console.log(num2);
  } else {
    console.log(num3);
  }
}
console.log("\nThe largest of three numbers is:");
maxOfThree(37, -2, 18);

// 3. A function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(char) {
  let vowels = "aeiou";
  if (vowels.includes(char.toLowerCase())) {
    return true;
  } else {
    return false;
  }
}
console.log("\nCharacter is vowel:");
console.log(isCharAVowel('I'));

//4.  A function expression, sumArray that takes an array of numbers and returns the sum of those numbers. 

const sumArray = function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
console.log("\nSum of array numbers:");
sumArray([-4, 24, 7]);

// 5. A function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.
function multiplyArray(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  console.log(product);
}
console.log("\nProduct of array numbers:");
multiplyArray([2, 4, 5]);

// 6. A function expression, numArgs that returns the number of arguments passed to the function when called.
const numArgs = function(...args) {
  let count = 0;
  args.forEach(() => count++)
  console.log(count);
}
console.log("\nArgument numbers:");
numArgs(1, [4, "cat", true], "string", false);

// 7. A function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".

function reverseString(word) {
  let reversed_word = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversed_word += word[i];
  }
  console.log(reversed_word);
}
console.log("\nReverses string:");
reverseString('rockstar');

// 8. A function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.

const longestStringInArray = function(arr) {
  let maxLength = arr[0].length;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
    }
  }
  console.log(maxLength);
}
console.log("\nlength of the longest string:");
longestStringInArray(["Nile", "Mississippi", "Amazon"]);

// 9. A  function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].

function stringsLongerThan(arr, num) {
  let new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > num) {
      new_arr.push(arr[i]);
    }
  }
  console.log(new_arr);
}
console.log("\nAn array of the strings that are longer than the number");
stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);