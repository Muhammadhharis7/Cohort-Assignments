/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let vowelCount = 0
    // return str.forEach((char)=>{
      // if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
      //   vowelCount += 1
      // }
    //   return vowelCount
    // })

    str.toLowerCase().split("").forEach((char) => {
      if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
        vowelCount += 1
      }
    });
    return vowelCount
}

module.exports = countVowels;