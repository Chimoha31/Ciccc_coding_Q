//Day01:
// Given a string x, return true if x is palindrome string.
// An integer is a  when it reads the same backward as forward.
// For example, "ala" is a palindrome while "abc" is not.
// You have to write a function in javascript, that accepts a parameter and returns true or false based on the condition'

function checkPalindrome(str) {
  let letter = str.split("");
  let reverseArry = letter.reverse();
  let joinArry = reverseArry.join("");
  if (str === joinArry) {
    return true;
  }
  return false;
}

console.log("abc", checkPalindrome("abc"));
console.log("aba", checkPalindrome("aba"));
