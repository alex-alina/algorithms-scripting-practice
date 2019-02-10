const assert = require('assert')
// 1. Return Largest Numbers in Arrays. 
//Return an array consisting of the largest number from each provided sub-array. 
//For simplicity, the provided array will contain exactly 4 sub-arrays.
// Test cases:
// [[], [], [], []] => []
// [[1, 2, 3, 4], [10, 20, 30, ,40], [11, 12, 13, 14], [51, 62, 73, 84]] => [4, 40, 14, 84]

//Solution with loop
function maxNumber(arr) {
  let maxNum = arr[0];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > maxNum) {
      maxNum = arr[i]
    }
  }
  return maxNum;
}

function largestNumbersLoops(arr) {
  const maxNumsArr = []
  for (let i = 0; i < arr.length; i += 1) {
    maxNumsArr.push(maxNumber(arr[i]))
  }
  return maxNumsArr;
}

console.log(largestNumbersLoops([[-1, -2, -3, -4], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

//Solution with map and reduce
function largestNumbers(arr) {
  return arr.map(subArr => subArr.reduce((a, b) => Math.max(a, b)))
}

//Test for largestNumbers(arr)
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
const expectedOutput = [4, 40, 14, 84];
const functionArg = [[1, 2, 3, 4], [10, 20, 30, 40], [11, 12, 13, 14], [51, 62, 73, 84]];
console.log(largestNumbers(functionArg))
assert(compareArrays(expectedOutput, largestNumbers(functionArg)))

console.log('All tests passed')