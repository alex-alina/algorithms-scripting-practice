const assert = require('assert')

// 1. Sum All Numbers in a Range. We'll pass you an array of two numbers. 
// Return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.
// Test cases:
// [1, 4] => 10
// [10, 5] => 45
// [0, 0] => 0

function sumAll(arr) {
  // sort numbers in ascending order
  const sortedArr = arr.sort(function (a, b) {
    return a - b;
  });

  // store sum
  let sum = 0;

  // go through all numbers in between the smallest and largest, included, and add them together
  for (let i = sortedArr[0]; i <= sortedArr[1]; i += 1) {
    sum += i;
  }

  return sum;
}

assert(10 === sumAll([1, 4]), sumAll([1, 4]))
assert(45 === sumAll([10, 5]), sumAll([10, 5]))
assert(0 === sumAll([0, 0]), sumAll([0, 0]))

// 2. Diff Two Arrays. Compare two arrays=> return a new array with any items 
// only found in one of the two given arrays, but not both. 
// So, return the symmetric difference of the two arrays.
// Test cases:
// ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] => [].
// ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] => ["diorite", "pink wool"]
// ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] => ["pink wool"]

// Version 1
function diffArray(arr1, arr2) {
  //filter differences in first arr
  const onlyInArr1 = arr1.filter(element => !arr2.includes(element));

  //filter differences in second arr
  const onlyInArr2 = arr2.filter(element => !arr1.includes(element));

  // add together differences (concat)
  return onlyInArr1.concat(onlyInArr2)
}

// *** Tests for diffArray ***

function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

// Test 1
const expectedOutput = ["pink wool", "diorite"];
const functionArgOne = ["andesite", "grass", "dirt", "pink wool", "dead shrub"];
const functionArgTwo = ["diorite", "andesite", "grass", "dirt", "dead shrub"];
assert(compareArrays(expectedOutput, diffArray(functionArgOne, functionArgTwo)))

// Test 2
const expectedOutput1 = [];
const functionArg1 = ["andesite", "grass", "dirt", "dead shrub"];
const functionArg2 = ["andesite", "grass", "dirt", "dead shrub"];
assert(compareArrays(expectedOutput1, diffArray(functionArg1, functionArg2)))


console.log('All tests passed')
