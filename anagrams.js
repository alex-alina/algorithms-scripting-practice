// Exercise - Write a function that checks if two strings are anagrams 
// i.e. they use the same letters and same number of each letter, but in different orders, case insensitive, ignoring spaces.
const assert = require('assert')

// Helper functions: count & compareEquals

// 1. count calculates how many times a letter appears in the string - it returns an object where:
// - the properties' keys are the unique letters included in the string 
// - the value assigned to each key is the number of times that letter appears in the string
function count(str) {
  let howMany = {};
  let howManyKeys = [];  
  let letter = "";

  for (let i = 0; i < str.length; i += 1) {
    letter = str.charAt(i);
    if (howManyKeys.indexOf(letter) === -1) {
      howManyKeys.push(letter);
      howMany[letter] = 1;      
    } else {
      howMany[letter]++;
    }
  }

  return howMany;
};

// Test for count
assert(true === compareEquals({ c: 1, a: 2, b: 2 }, count("cabba")))

//2. compareEquals compares if two objects have the same properties' keys with the same values assigned
function compareEquals(obj1, obj2) {
  const keysObj1 = Object.keys(obj1); //["c", "a", "n"]
  const keysObj2 = Object.keys(obj2); //["c", "n", "a"]

  if(keysObj1.length !== keysObj2.length) {
    return false
  }

  for (let i = 0; i < keysObj2.length; i += 1) {
    // the value of index is the index at which the key at index i in the second array could be found in the first array
    let index = keysObj1.indexOf(keysObj2[i]);
    
    //if an element from the second array can't be found in the first one OR
    //if inside the objects the value of the key from the second array (obj2 key) is different from the value of the same key from the first arr (obj1 key)
    if (index === -1 || obj2[keysObj2[i]] !== obj1[keysObj1[index]]) {
      return false
    }
  }

  return true;
};

// Tests for compareEquals
const objOne = { c: 1, a: 2, b: 2 };
const objTwo = { a: 2, c: 1, b: 2 }
assert(true === compareEquals(objOne, objTwo), "the objects have the same properties' keys & each key has the same value in both objects")

const obj1 = { c: 1, a: 2, b: 2 };
const obj2 = { a: 2, b: 2 }
assert(false === compareEquals(obj1, obj2), "objects with different numbers of keys are not equal")



function areAnagrams(str1, str2) {
  let str1NoSpace = str1.replace(/\s/g, "").toLowerCase();
  let str2NoSpace = str2.replace(/\s/g, "").toLowerCase();

  if (str1NoSpace.length !== str2NoSpace.length || str1NoSpace === str2NoSpace) {
    return false;
  }

  const letterCount1 = count(str1NoSpace);
  const letterCount2 = count(str2NoSpace);

  return compareEquals(letterCount1, letterCount2);
};

// Tests for areAnagrams func
assert(false === areAnagrams("asdf", "asdf"), "The two words are not anagrams. They are identical")
assert(false === areAnagrams("aasdf", "fdsa"), "The two words are NOT anagrams")
assert(true === areAnagrams("William Shakespeare", "I am a weakish speller"), "The two words are anagrams")
assert(true === areAnagrams("asdf", "fdsa"), "The two words are anagrams")
assert(false === areAnagrams("aaaf", "fdsa"), "The two words are anagrams")


console.log("All tests passed")