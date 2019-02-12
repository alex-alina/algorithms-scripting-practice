const assert = require('assert');
// 1. DNA Pairing. 
// Requirements: 
// - take each character, get its pair, return the results as a 2d array.
// - base pairs are a pair of AT and CG. Match the missing element to the provided character.
// - return the provided character as the first element in each array.
// Test cases:
// "" => []
// "A" =>[["A", "T"]]
// "GCG" => [["G", "C"], ["C","G"],["G", "C"]]
// "ATCGA" = [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]

const dnaBasePairs = {
  A: "T",
  T: "A",
  G: "C",
  C: "G"
}

function pairElement(dnaStr) {
  // take dnaStr and make sure the letters are capitalised
  const capitalisedDnaStr = dnaStr.toUpperCase()

  // split string into array of strings 
  const dnaArr = capitalisedDnaStr.split("")

  // make list with all the possible bases (first letters in a base pair)
  const firstElements = Object.keys(dnaBasePairs)

  // use map to change each half pair into a full pair:
  // - look up for pair, add pair and return the full pair as a new list
  // return final list with completed pairs
  const fullDnaPair = dnaArr.map(element => {
    if (!firstElements.includes(element)) {
      throw new Error("This is not a valid DNA pair element");
    }
    return [element, dnaBasePairs[element]]
  })

  return fullDnaPair
}

console.log(pairElement("gcga"))
console.log('All tests passed');

