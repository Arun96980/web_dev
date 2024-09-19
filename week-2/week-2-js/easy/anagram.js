/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
let k = [1,2,3,1,3,43,4,4,3]
l = k.sort().reverse().filter(onlyUnique)
console.log(l)