const assert = require('assert')

//1. Convert Celsius to Fahrenheit
function convertToF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

assert(-22 === convertToF(-30), convertToF(-30));
assert(32 === convertToF(0), convertToF(0));

//2. Reverse a String
function reverseString(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reversedStr += str[i]
  }
  return reversedStr;
}

assert('olleh' === reverseString("hello"), reverseString("hello"));
assert("ydwoH" === reverseString("Howdy"), reverseString("Howdy"));
assert("htraE morf sgniteerG" === reverseString("Greetings from Earth"), reverseString("Greetings from Earth"));

//3. Factorialize a Number (5! = 5*4*3*2*1 = 120)
// Test cases
//5! => 120
//10! => 3628800
// 0! => 1

function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1)
}

assert(120 === factorialize(5), factorialize(5))
assert(3628800 === factorialize(10), factorialize(10))
assert(1 === factorialize(0), factorialize(0))

//4. Sum all the numbers in an array using recursion
// Test cases:
//[] => 0
//[2] => 2 + [] => 2
//[1, 2, 3, 4] => 1 + [2, 3, 4] => 10
//[53, 21] => 74

function sumNumsInArr(arr) {
  if (arr.length === 0) {
    return 0
  }
  return arr[0] + sumNumsInArr(arr.slice(1))
}

assert(10 === sumNumsInArr([1, 2, 3, 4]), sumNumsInArr([1, 2, 3, 4]))
assert(74 === sumNumsInArr([53, 21]), sumNumsInArr([53, 21]))

//5. Write a recursive function that checks if a word is a palindrome 
// Test cases:
// "" => true
//"c" => true
//"noon" => true
// "badger" => false
//" kayak" => true

function isPalindrome(word) {
  if (word.length <= 1) {
    return true
  }
  if (word[0] === word[word.length - 1]) {
    return isPalindrome(word.slice(1, word.length - 1))
  }
  return false
}

assert(true === isPalindrome(""), isPalindrome(""))
assert(true === isPalindrome("c"), isPalindrome("c"))
assert(true === isPalindrome("noon"), isPalindrome("noon"))
assert(false === isPalindrome("badger"), isPalindrome("badger"))
assert(true === isPalindrome("kayak"), isPalindrome("kayak"))

//6. Find the Longest Word: return the length of the longest word in the sentence
// Test cases:
// "" => 0
// "word" => 4
// "This is lovely" => 6

function getLongestWordLength(sentence) {
  //separate sentence into a word's list
  const wordsList = sentence.split(" ");

  // store longest word's lenght
  let longestWordLength = 0

  //ckeck the length of each word and update the storage of longest word
  for (let i = 0; i < wordsList.length; i += 1) {
    if (wordsList[i].length > longestWordLength) {
      longestWordLength = wordsList[i].length;
    }
  }

  return longestWordLength
}

assert(0 === getLongestWordLength(""), getLongestWordLength(""))
assert(6 === getLongestWordLength("This is lovely"), getLongestWordLength("This is lovely"))
assert(5 === getLongestWordLength("May the force be with you"), getLongestWordLength("May the force be with you"))

console.log('All tests passed')