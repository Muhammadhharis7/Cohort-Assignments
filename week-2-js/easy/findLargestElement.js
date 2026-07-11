/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if(numbers.length < 1){
        console.log(undefined);
        return undefined;
    }
    return numbers.reduce((prevNum,currNum) => {
        if(prevNum > currNum){
            console.log(prevNum);
            return prevNum
        }else {
            console.log(currNum);
            return currNum
        }
    })
}

module.exports = findLargestElement;