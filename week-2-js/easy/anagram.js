/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// function isAnagram(str1, str2) {
//     if(str1.length !== str2.length){
//       console.log("The characters are not equal");
//       return;
//     }
//     const splitedString1 = str1.split("")
//     const sortedString1 = splitedString1.sort()
//     const joiningString1 = sortedString1.join("")
//     // console.log(splitedString1);
//     // console.log(splitedString2);
    
//     // console.log(sortedString1);
//     const splitedString2 = str2.split("")
//     const sortedString2 = splitedString2.sort()
//     const joiningString2 = sortedString2.join("")
//     // console.log(sortedString2);

//     // console.log(joiningString1);
//     // console.log(joiningString2);

//     if(joiningString1 == joiningString2){
//       return true
//     }else{
//       return false
//     }
// }


// // console.log(isAnagram("ccbaba","ababcc"))



// module.exports = isAnagram;

// // export default isAnagram;


function isAnagram (str1,str2) {
if(str1.length !== str2.length){
  console.log("The characters of both the strings are not equal");
  return false
}
  const lowerCaseString1 = str1.toLowerCase()
  const arr1 = lowerCaseString1.split("")
  console.log(arr1);
  console.log(arr1.sort());
  const sortedString1 = arr1.join("")
  console.log(sortedString1);
  
  
  const lowerCaseString2 = str2.toLowerCase()
  const arr2 = lowerCaseString2.split("")
  console.log(arr2);
  console.log(arr2.sort())
  const sortedString2 = arr2.join("")
  console.log(sortedString2);

  if(sortedString1 == sortedString2){
    console.log(true);
    return true
  }else{
    console.log(false);
    return false
  }
}

module.exports = isAnagram